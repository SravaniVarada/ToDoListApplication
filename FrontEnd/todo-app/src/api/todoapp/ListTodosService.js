import axios from "axios"
import {API_URL,JPA_API_URL} from '../../Constants'

class ListTodosService {
    retrieveTodos(userName){
        //console.log(`retrieve todos in listtodos service ${username}`)
        return axios.get(`${JPA_API_URL}/users/${userName}/todos`);
    }

    deleteTodo(userName,id){
        return axios.delete(`${JPA_API_URL}/users/${userName}/todos/${id}`);
    }

    retrieveTodo(userName,id){
        return axios.get(`${JPA_API_URL}/users/${userName}/todos/${id}`);
    }

    updateTodo(userName,id,todo){
        return axios.put(`${JPA_API_URL}/users/${userName}/todos/${id}`,todo);
    }

    createTodo(userName,todo){
        return axios.post(`${JPA_API_URL}/users/${userName}/todos`,todo)
    }
}
export default new ListTodosService();