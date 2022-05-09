import * as api from '../../api/index'
import {actionTypes} from '../constants/action-types'

//action creators

export const getTodos = () => async (dispatch) => {
    try {
        const response = await api.fetchTodos();
        dispatch({ type: actionTypes.FETCH_TASKS, payload: response.data})
    } catch (error) {
        console.log(error);
    }

}

export const createTodo = (post) => async (dispatch) => {
    try {
        const response = await api.postTodo(post);
        dispatch({type: actionTypes.CREATE_TASK, payload: response.data})
    } catch (error) {
        console.log(error);
    }
}

export const fetchTask = (id) => async (dispatch) =>{
    try {
        const response = await api.selectTodo(id);
        dispatch({type: actionTypes.SELECT_TASK, payload: response.data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteTask = (id) => async (dispatch) => {
    try {
        await api.deleteTodo(id)
        dispatch({type: actionTypes.DELETE_TASK, payload: id})
    } catch (error) {
        console.log(error);
    }
}

export const updateTask = (id, task) => async (dispatch) => {
    try {

       const response =  await api.UpdateTodo(id,task)
       dispatch({type: actionTypes.UPDATE_TASK, payload: response.data})
       
    } catch (error) {
        console.log(error);
    }
}