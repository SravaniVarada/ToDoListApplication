import React, {Component} from 'react'
import './Counter.css'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todoapp/HelloWorldService.js'

class WelcomeComponent extends Component{

    constructor(props){
        super(props)
        this.retrieveClick = this.retrieveClick.bind(this)
        this.state = {
            welcomeMessage : '',
            errorMessage :''
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleErrorResponse = this.handleErrorResponse.bind(this)
    }
    render() {
        return(
            <>
            <h1>Welcome!!</h1>
            <div className= "container">
            Welcome {this.props.match.params.name}. 
                 Go to <Link to="/todos">ToDos</Link> list.
            </div>

            <div className = "container">
                Click here to get welcome message from backend :)
                <button className = "btn btn-success" onClick={this.retrieveClick}>Click here</button>
            </div>
            <div className = "container">
            {this.state.welcomeMessage}
            </div>
            <div className = "errorMessage">
            {this.state.errorMessage}
            </div>
            </>
        )
    }

    retrieveClick(){
        // HelloWorldService.executeHelloWorldService()
        // .then( response => this.handleSuccessfulResponse(response));
        
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then( response => this.handleSuccessfulResponse(response))
        .catch( error => this.handleErrorResponse(error));
    }

    handleSuccessfulResponse(response){
        
        this.setState({welcomeMessage:response.data.message}) //response.data is enough if helloWorld
    }                                                         // is called, as if returns simple string instead of object

    handleErrorResponse(error){
        console.log(error.response)
        let errorMessage = ''
        if(error.message){
            errorMessage += error.message
        }

        if(error.response && error.response.data){
            errorMessage += error.response.data.message
        }

        this.setState({errorMessage:errorMessage})
    }
}

export default WelcomeComponent;