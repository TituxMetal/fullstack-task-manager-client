import axios from 'axios'

const baseUri = `/api/tasks`
export const getAllTasks = async () => await axios.get(`${baseUri}`)

export const createTask = async data => await axios.post(`${baseUri}`, data)

export const editTask = async (id, data) => await axios.patch(`${baseUri}/${id}`, data)

export const deleteTask = async id => await axios.delete(`${baseUri}/${id}`)
