import axios from 'axios';

const url = "http://localhost:3001/todos";

export const fetchTodos = () => axios.get(url);
export const postTodo = (newTodo) => axios.post(url, newTodo)
export const selectTodo = (id) => axios.get(`${url}/${id}`)
export const deleteTodo = (id) => axios.delete(`${url}/${id}`)
export const UpdateTodo = (id, updatedTask) => axios.put(`${url}/${id}`, updatedTask)