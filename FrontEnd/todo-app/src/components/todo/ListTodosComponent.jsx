import React, {Component} from 'react'
import moment from 'moment'
import './Counter.css'
import ListTodosService from '../../api/todoapp/ListTodosService.js'
import AuthenticationService from '../../api/todoapp/AuthenticationService.js'

class ListTodosComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            todos: 
            [
                // {id:1, description: 'reactjs', isDone: false, targetDate: new Date()}, 
                // {id:2, description: 'springboot', isDone: false, targetDate: new Date()}, 
                // {id:3, description: 'collections', isDone: false, targetDate: new Date()},
                // {id:4, description: 'maps', isDone: false, targetDate: new Date()}
            ],
            errorMessage :'',
            message:null
        }
       // this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleErrorMessage = this.handleErrorMessage.bind(this)
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.createTodoClicked = this.createTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentDidMount(){
        this.refreshTodos();
    }

    render() {
        return(
            <div className="container"> 
                <h1> List of ToDo </h1>
                {this.state.message && <div className = "alert alert-success">{this.state.message}</div>}
                <div className = "container">
                {this.state.errorMessage}
                </div>
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Username</th>
                                <th>Description</th>
                                <th>Is Done</th>
                                <th>Target Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {
                            this.state.todos.map (
                                todo =>
                                <tbody>
                                    <tr key = {todo.id}> 
                                        <th>{todo.id}</th>
                                        <th>{AuthenticationService.getUserName()}</th>
                                        <th>{todo.description}</th>
                                        <th>{todo.isDone}</th>
                                        <th>{(todo.targetDate)}</th>
                                        <th><button className = "btn btn-success" onClick = {() => this.updateTodoClicked(todo.id)}> update </button>
                                             {/* <img className = "editImage" src={require('C:/Users/vikas/Downloads/editbutton.jpg')}/>  */}
                                             {' '}
                                            <button className = "btn btn-warning" onClick = {() => this.deleteTodoClicked(todo.id)}>delete</button>
                                        </th>
                                    </tr>
                                </tbody>
                            )    
                        }
                    </table>
                </div>
                <div className = 'row'>
                <button className = 'btn btn-success' onClick = {() => this.createTodoClicked()}> add todo </button>
                </div>
            </div>
        )
    }

    refreshTodos(){
        let userName = AuthenticationService.getUserName();

        ListTodosService.retrieveTodos(userName)//this.props.match.params.name)
        .then( 
            response => {
                this.setState({todos:response.data})
                console.log("in refresh todos")
                console.log(this.state.todos)
            }
        )
            //this.handleSuccessfulResponse(response))
        .catch(error => this.handleErrorMessage(error))
    }


    updateTodoClicked(id){
        console.log('update called '+id)
        this.props.history.push(`/todos/${id}`)
    }
    createTodoClicked(){
        this.props.history.push('/todos/-1')

    }

    deleteTodoClicked(id){
        ListTodosService.deleteTodo(AuthenticationService.getUserName(),id)
        .then(
            response => {
                this.setState({message:`Delete of todo ${id} is successful`});
                this.refreshTodos();
            }
        )
    }
    // handleSuccessfulResponse(response){
    //    // console.log("handleSuccessfulResponse--todos")
    //     this.setState({todos:response.data})
    // }

    handleErrorMessage(error){
        console.log("in handle error msg")
        console.log(error)
        this.setState({errorMessage:error.response})
    }
}
export default ListTodosComponent;