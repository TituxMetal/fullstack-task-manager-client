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
