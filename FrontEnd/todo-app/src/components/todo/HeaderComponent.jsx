import React, {Component} from 'react'
import './Counter.css'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import AuthenticationService from '../../api/todoapp/AuthenticationService.js'

class HeaderComponent extends Component {
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        const user = AuthenticationService.getUserName();
        console.log(isUserLoggedIn);
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.facebook.com" className="navbar-brand">ToDoAPPLICATION</a></div>
                    <ul className = "navbar-nav">
                        {isUserLoggedIn && <li><Link className = "nav-link" to={`/welcome/${user}`}>Home</Link></li>}
                        {isUserLoggedIn && <li><Link className = "nav-link" to="/todos">ToDos</Link></li>}
                    </ul>
                    <ul className = "navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className = "nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className = "nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);