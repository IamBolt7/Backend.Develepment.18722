from datetime import timedelta

from fastapi import Depends, FastAPI, HTTPException, Response, status
from pydantic import BaseModel, ConfigDict, EmailStr, Field
from sqlalchemy.orm import Session

from auth import (
    ACCESS_TOKEN_EXPIRE_MINUTES,
    create_access_token,
    get_current_user,
    get_password_hash,
    verify_password,
)
from database import Base, engine, get_db
from models import Student

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Student Management API - JWT Authentication",
    description="Lecture 20 lab: Basic Auth concepts, token-based authentication, JWT, and authorization.",
    version="2.0.0",
)


class RegisterRequest(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    branch: str = Field(min_length=2, max_length=50)
    password: str = Field(min_length=8, max_length=128)


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str
    expires_in_minutes: int


class StudentResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    name: str
    email: EmailStr
    branch: str
    role: str


@app.get("/", tags=["General"])
def root():
    return {
        "message": "JWT Authentication Lab API",
        "lecture": "Lecture 20 - Authentication Mechanisms",
        "docs": "/docs",
    }


@app.post("/register", response_model=StudentResponse, status_code=status.HTTP_201_CREATED, tags=["Authentication"])
def register(request: RegisterRequest, db: Session = Depends(get_db)):
    """Register a student. Public registration always creates a student role."""
    if db.query(Student).filter(Student.email == request.email).first():
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Email already registered")

    user = Student(
        name=request.name,
        email=request.email,
        branch=request.branch,
        hashed_password=get_password_hash(request.password),
        role="student",
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


@app.post("/students", response_model=StudentResponse, status_code=status.HTTP_201_CREATED, tags=["Students"])
def create_student(request: RegisterRequest, db: Session = Depends(get_db)):
    """Lecture-compatible alias for student registration."""
    return register(request, db)


@app.post("/login", response_model=TokenResponse, tags=["Authentication"])
def login(request: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(Student).filter(Student.email == request.email).first()
    if not user or not verify_password(request.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    token = create_access_token(
        data={"sub": str(user.id), "email": user.email, "role": user.role},
        expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
    )
    return {
        "access_token": token,
        "token_type": "bearer",
        "expires_in_minutes": ACCESS_TOKEN_EXPIRE_MINUTES,
    }


@app.get("/protected", tags=["Protected"])
def protected_route(current_user: Student = Depends(get_current_user)):
    return {
        "message": f"Hello, {current_user.name}!",
        "user_id": current_user.id,
        "email": current_user.email,
        "role": current_user.role,
    }


@app.get("/me", response_model=StudentResponse, tags=["Protected"])
def read_current_user(current_user: Student = Depends(get_current_user)):
    return current_user


@app.delete("/students/{student_id}", status_code=status.HTTP_204_NO_CONTENT, tags=["Students"])
def delete_student(
    student_id: int,
    current_user: Student = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """Only an admin or the student themself may delete the record."""
    if current_user.role != "admin" and current_user.id != student_id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to delete this student",
        )

    student = db.query(Student).filter(Student.id == student_id).first()
    if not student:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Student not found")

    db.delete(student)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
