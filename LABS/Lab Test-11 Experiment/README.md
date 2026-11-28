# Lab Test-11 Experiment — Containerized Todo Application (Docker)

> **Navigation:** [Main README](../../README.md) · [LABS README](../README.md) · [Website View](https://iambolt7.github.io/Backend.Develepment.18722/#doc=LABS/Lab%20Test-11%20Experiment/README.md) · [GitHub Repo](https://github.com/IamBolt7/Backend.Develepment.18722)

A containerized full-stack Todo management application built with Node.js and Express.js for the Backend Development final examination task. Tasks support full CRUD operations (create, view, update, complete, and delete) and persist to `docker-data/tasks.json` via a Docker host volume so records remain intact when containers are stopped, removed, and recreated.

## Application Description

The application serves a browser-based task manager alongside a JSON REST API and `/health` check endpoint. It binds to `0.0.0.0` inside the container on port `3000`, reads and writes persistent task records inside `DATA_DIR` (`/app/data` in Docker, `./docker-data` locally), and preserves all changes on the host filesystem through Docker bind-mount volume mapping.

## Technologies Used

| Technology | Role |
| --- | --- |
| Node.js 20 | Server-side JavaScript runtime |
| Express.js | HTTP server, static file hosting, and CRUD REST API |
| JSON File Storage | Lightweight persistent storage in `docker-data/tasks.json` |
| Docker | Container image packaging (`Dockerfile`, `.dockerignore`) and volume persistence |
| HTML5 and CSS3 | Monochrome browser interface for task management |

## Project Structure

```text
Lab Test-11 Experiment/
├── server.js
├── package.json
├── Dockerfile
├── .dockerignore
├── .gitignore
├── README.md
├── public/
│   ├── index.html
│   └── styles.css
└── docker-data/
    └── tasks.json
```

## API Endpoints

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/` | Serve the browser Todo interface |
| GET | `/health` | Container health, active `DATA_DIR`, and task count |
| GET | `/api/tasks` | List all tasks (`?status=all\|pending\|completed&q=...`) |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update task title, category, notes, or completion state |
| PATCH | `/api/tasks/:id/toggle` | Toggle task completion status |
| DELETE | `/api/tasks/:id` | Delete a task |

## Local Setup Instructions

```bash
cd "LABS/Lab Test-11 Experiment"
npm install
npm start
```

Open `http://localhost:3000` in your browser. Locally without Docker, tasks are stored in `docker-data/tasks.json`.

## Docker Build Command

Build the image from inside `LABS/Lab Test-11 Experiment`:

```bash
cd "LABS/Lab Test-11 Experiment"
docker build -t todo-app:v1 .
```

Verify the image was created:

```bash
docker images
```

## Docker Run Command with Volume Mapping

Start the container mapped from host port `8080` to container port `3000` and mount `./docker-data` to `/app/data`:

```bash
docker run -d \
  --name todo-app \
  -p 8080:3000 \
  -v "$(pwd)/docker-data:/app/data" \
  todo-app:v1
```

On Windows PowerShell:

```powershell
docker run -d `
  --name todo-app `
  -p 8080:3000 `
  -v "${PWD}/docker-data:/app/data" `
  todo-app:v1
```

## Application URL

Once the container is running, open:

```text
http://localhost:8080
```

## Volume Mapping Explanation

Inside `Dockerfile`, the environment variable `DATA_DIR` is configured as `/app/data` and `server.js` reads and writes `tasks.json` inside `DATA_DIR`. Passing `-v "$(pwd)/docker-data:/app/data"` bind-mounts the local `docker-data/` folder on your machine directly to `/app/data` inside the container. Because writes land directly in `./docker-data/tasks.json` on the host instead of the container's ephemeral writable layer, deleting the container does not delete your tasks.

## Data Persistence Test Instructions

1. Start the container and open `http://localhost:8080`.
2. Add or update a task in the browser and verify `docker-data/tasks.json` updates on the host.
3. Stop and remove the running container:

```bash
docker stop todo-app
docker rm todo-app
```

4. Recreate a brand-new container attached to the same host directory:

```bash
docker run -d \
  --name todo-app \
  -p 8080:3000 \
  -v "$(pwd)/docker-data:/app/data" \
  todo-app:v1
```

5. Reload `http://localhost:8080` and confirm every previously created task is still present.

## Useful Docker Commands

```bash
# Build image
docker build -t todo-app:v1 .

# Run container in background with port + volume mapping
docker run -d --name todo-app -p 8080:3000 -v "$(pwd)/docker-data:/app/data" todo-app:v1

# Inspect running containers
docker ps

# View application logs
docker logs todo-app

# Inspect container filesystem / persisted data inside /app/data
docker exec -it todo-app ls -la /app/data

# Stop and remove container
docker stop todo-app
docker rm todo-app
```

## Submission Checklist

- [x] `Dockerfile` packages the app on `node:20-alpine` listening on `0.0.0.0:3000`
- [x] `.dockerignore` excludes local caches and host directories from build context
- [x] Application implements full CRUD (`POST`, `GET`, `PUT`, `PATCH`, `DELETE`)
- [x] Persistent data stored inside `docker-data/tasks.json` via `/app/data` volume mount
- [x] Persistence preserved after `docker stop`, `docker rm`, and container recreation

## Author

**Arnav Daftuar**  
Backend Development — Lab Test-11 (Final Examination Containerization Task)

---

## Connected Navigation

- [Back to Main Repository README](../../README.md)
- [Back to LABS README](../README.md)
- [Open Website Portal](../../index.html)
