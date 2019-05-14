import axios from 'axios'

const baseUri = `/api/tasks`
export const getAllTasks = async () => await axios.get(`${baseUri}`)

export const createTask = async data => await axios.post(`${baseUri}`, data)
