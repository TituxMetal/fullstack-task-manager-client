# Fullstack Task Manager

Simple task manager using Next.js and Docker.

## Api

Built with Express, mongoose, including validation with Joi.

## Front-end

Built with React using React Hooks and React Context, styled with Styled Components.

# Spec

| Task                            | Current Status | Done                      |
| ------------------------------- | -------------- | ------------------------- |
| Display a list of tasks         | To Do          | <ul><li> - [ ] </li></ul> |
| Add a task                      | To Do          | <ul><li> - [ ] </li></ul> |
| Toggle complete/uncomplete task | To Do          | <ul><li> - [ ] </li></ul> |
| Show number of tasks            | To Do          | <ul><li> - [ ] </li></ul> |
| Edit a task                     | To Do          | <ul><li> - [ ] </li></ul> |
| Delete a task                   | To Do          | <ul><li> - [ ] </li></ul> |

# Api endpoints

| [x] | Route                 | Arguments   | Payload                                                                    | Return              |
| --- | --------------------- | ----------- | -------------------------------------------------------------------------- | ------------------- |
| [ ] | GET /api/tasks        |             |                                                                            | [ { Task } ] OR [ ] |
| [ ] | POST /api/tasks       |             | { description (string, minLength = 4), completed (boolean) default false } | { Task }            |
| [ ] | PATCH /api/tasks/:id  | :id task Id | { description (string, minLength = 4), completed (boolean) }               | { Task }            |
| [ ] | DELETE /api/tasks/:id | :id task Id |                                                                            | { Task }            |

# Usage

Clone this repository with `git clone https://github.com/TituxMetal/fullstack-task-manager.git` and install dependencies `yarn install`.

## Run the app:

- in dev mode with `yarn dev` and open http://localhost:3000 in your browser.
- in production mode with `yarn build && yarn start` and open http://localhost:3000 in your browser

## Run the app with Docker

Build the Docker image with `docker build -t task-manager .` then run `docker run -d --rm --name task-manager -p 80:3000 task-manager` and open http://localhost in your browser.

Or simply push the image from the docker hub with `docker pull tuximetal/fullstack-task-manager:1.0.0` and run it with `docker run -d --rm --name fullstack-task-manager -p 80:3000 tuximetal/fullstack-task-manager:1.0.0` and open http://localhost in your browser.
