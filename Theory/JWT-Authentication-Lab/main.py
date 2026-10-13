from datetime import timedelta
from fastapi import FastAPI, Depends, HTTPException, status
from pydantic import BaseModel, EmailStr, ConfigDict
from sqlalchemy.orm import Session
from database import Base, engine, get_db
from models import Student
from auth import get_password_hash, verify_password, create_access_token, get_current_user, ACCESS_TOKEN_EXPIRE_MINUTES

Base.metadata.create_all(bind=engine)
app = FastAPI(title="Student Management API - JWT Authentication", version="1.0.0")

class RegisterRequest(BaseModel):
    name: str
    email: EmailStr
    branch: str
    password: str
    role: str = "student"

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str

class StudentResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    name: str
    email: EmailStr
    branch: str
    role: str

@app.get("/")
def root():
    return {"message": "JWT Authentication Lab API", "docs": "/docs"}

@app.post("/register", response_model=StudentResponse, status_code=201)
def register(request: RegisterRequest, db: Session = Depends(get_db)):
    if db.query(Student).filter(Student.email == request.email).first():
        raise HTTPException(status_code=409, detail="Email already registered")
    user = Student(name=request.name, email=request.email, branch=request.branch,
                   hashed_password=get_password_hash(request.password), role=request.role)
    db.add(user); db.commit(); db.refresh(user)
    return user

@app.post("/students", response_model=StudentResponse, status_code=201)
def create_student(request: RegisterRequest, db: Session = Depends(get_db)):
    return register(request, db)

@app.post("/login", response_model=TokenResponse)
def login(request: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(Student).filter(Student.email == request.email).first()
    if not user or not verify_password(request.password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password")
    token = create_access_token({"sub": str(user.id), "email": user.email, "role": user.role}, timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    return {"access_token": token, "token_type": "bearer"}

@app.get("/protected")
def protected_route(current_user: Student = Depends(get_current_user)):
    return {"message": f"Hello, {current_user.name}!", "user_id": current_user.id, "role": current_user.role}

@app.delete("/students/{student_id}", status_code=204)
def delete_student(student_id: int, current_user: Student = Depends(get_current_user), db: Session = Depends(get_db)):
    if current_user.role != "admin" and current_user.id != student_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized to delete this student")
    student = db.query(Student).filter(Student.id == student_id).first()
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    db.delete(student); db.commit()
    return None
