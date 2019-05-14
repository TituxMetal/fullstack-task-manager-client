# Fullstack Task Manager

Simple task manager using Next.js and Docker.

## Api

Built with Express, mongoose, including validation with Joi.

## Front-end

Built with React using React Hooks and React Context, styled with Styled Components.

# Spec

| Task                            | Current Status | Done                      |
| ------------------------------- | -------------- | ------------------------- |
| Display a list of tasks         | Done           | <ul><li> - [x] </li></ul> |
| Add a task                      | To Do          | <ul><li> - [x] </li></ul> |
| Toggle complete/uncomplete task | To Do          | <ul><li> - [ ] </li></ul> |
| Show number of tasks            | To Do          | <ul><li> - [ ] </li></ul> |
| Edit a task                     | To Do          | <ul><li> - [ ] </li></ul> |
| Delete a task                   | To Do          | <ul><li> - [ ] </li></ul> |

# Api endpoints

| [x] | Route                 | Arguments   | Payload                                                                    | Return              |
| --- | --------------------- | ----------- | -------------------------------------------------------------------------- | ------------------- |
| [x] | GET /api/tasks        |             |                                                                            | [ { Task } ] OR [ ] |
| [x] | POST /api/tasks       |             | { description (string, minLength = 4), completed (boolean) default false } | { Task }            |
| [ ] | PATCH /api/tasks/:id  | :id task Id | { description (string, minLength = 4), completed (boolean) }               | { Task }            |
| [x] | DELETE /api/tasks/:id | :id task Id |                                                                            | { Task }            |

# Usage

Clone this repository with `git clone https://github.com/TituxMetal/fullstack-task-manager.git` and install dependencies `yarn install`.

## Run the app:

Make sure to setup the port and database uri in a dev.env file or in environment variables

If you have Docker installed just run `yarn docker:mongo` to start a mongodb container named mongoDev.

- in dev mode with `yarn dev` and open http://localhost:3000 in your browser.
- in production mode with `yarn build && yarn start` and open http://localhost:3000 in your browser

## Run the app with Docker

Build the Docker image with `docker build -t task-manager .` then run `docker run -d --rm --name task-manager -p 80:3000 --link mongoDev:mongo task-manager` and open http://localhost in your browser.

Or simply pull the image from the docker hub with `docker pull tuximetal/task-manager:0.1.0` and run it with `docker run -d --rm --name task-manager -p 80:3000 --link mongoDev:mongo -e MONGO_URI=mongodb://mongo:27017/task-manager tuximetal/task-manager:0.1.0` and open http://localhost in your browser.
