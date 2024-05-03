# Wahoot Project

## Frontend : Nuxt + Apollo + Tailwind

## Backend : GraphQL + Apollo + TypeGraphQL + TypeORM

## Deploy And Test : Docker + Jest + Playwright + ??

### Setting Up This Project :

> Before anything be sure to have docker installed on your computer.

- Step 1 : Clone this Repository.

- Step 2 : In Root directory Copy/Paste .env.sample file to a .env file and change the three first variables (`POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD`).

- Step 3 : Go into Backend Directory and Copy/Paste .env.sample file to a .env file. Be sure thet `USERNAME`, `PASSWORD` and `DATABASE` matches the env variables from root directory.

- Step 4 : Go Into Frontend Directory and Copy/Paste .env.sample file to a .env file. Be sure that the `BACKEND_URL` variable link use the same `PORT` as your `PORT` variable from backend directory.

- Step 5 : Run `Docker Compose Up` or `Docker Compose Up --build` to launch your applications.
