import axios from 'axios'

const baseUri = `/api/tasks`
export const getAllTasks = async () => await axios.get(`${baseUri}`)
