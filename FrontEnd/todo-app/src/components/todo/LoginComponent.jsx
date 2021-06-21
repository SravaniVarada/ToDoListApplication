import React, {Component} from 'react'
import './Counter.css'
import AuthenticationService from '../../api/todoapp/AuthenticationService.js'

class LoginComponent extends Component {
        
    constructor(props){
        super(props)
        this.state = {
            username : "sravani",
            password : "",
            showSucessMessage : false,
            hasLoginFailed : false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        //this.handlePasswordChange = this.handlePasswordChange.bind(this )
    }
    handleChange(event) {
        this.setState({[event.target.name]:event.target.value})
    }
    loginClicked(){
        // if(this.state.username === 'sravani' && this.state.password === 'sravs'){
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //    // this.setState({showSucessMessage : true})
        //    // this.setState({hasLoginFailed : false})
        // }
        // else {
        //     console.log("failed")
        //     this.setState({showSucessMessage : false})
        //     this.setState({hasLoginFailed : true})
        // }

        // AuthenticationService.executeBasicAuthenticationService(this.state.username,this.state.password)
        // .then(() => {
        //         AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //         this.props.history.push(`/welcome/${this.state.username}`)
        // }).catch(() => {
        //         this.setState({showSucessMessage : false})
        //         this.setState({hasLoginFailed : true})
        // })

        AuthenticationService.executeJwtAuthenticationService(this.state.username,this.state.password)
        .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwtToken(this.state.username, response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
        }).catch(() => {
                this.setState({showSucessMessage : false})
                this.setState({hasLoginFailed : true})
        })
    }
    // handlePasswordChange(event){
    //     console.log(event.target.value)
    //     this.setState({password:event.target.value})
    // }
    render() {
        return(
            <div>
                <h1>Login</h1>
                <div className = "container">
                    {/* <ShowInvalidLogin hasLoginFailed = {this.state.hasLoginFailed} /> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning"> Invalid Credentials </div>}
                    {/* <ShowLoginSucessful showSucessMessage = {this.state.showSucessMessage} /> */}
                    {this.state.showSucessMessage && <div>Login Sucessful</div>}
                    UserName: <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleChange} />
                    Password: <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleChange} />
                    <button className="btn btn-success" onClick = {this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

// function ShowInvalidLogin(props){
//     if(props.hasLoginFailed){
//        return <div> Invalid Credentials</div>
//     }
//     return null
// }
// function ShowLoginSucessful(props){
//     if(props.showSucessMessage){
//        return <div>Login Sucessful</div>
//     }
//     return null
// }
export default LoginComponent;