import axios from 'axios'
import {API_URL} from '../../Constants'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'AuthenticatedUser'

class AuthenticationService {

    createBasicAuthHeader(username, password){
        return  'Basic ' + window.btoa(username + ":" + password)
    }

    executeBasicAuthenticationService(username, password){
     
        return axios.get(`${API_URL}/basicAuth`,{
            headers:{
                authorization : this.createBasicAuthHeader(username,password)
            }
        })
    }

    executeJwtAuthenticationService(username, password){
     
        return axios.post(`${API_URL}/authenticate`, {
        username, 
        password })
    }

    registerSuccessfulLogin(username,password){
        
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username);
        this.setUpAxioxInterceptors(this.createBasicAuthHeader(username,password))
    }

    registerSuccessfulLoginForJwtToken(username, token) {
        
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username);
        this.setUpAxioxInterceptors(this.createJwtTokenHeader(token))
    }

    createJwtTokenHeader(token){
        return  'Bearer ' + token
    }

    logout(){
        console.log("logout")
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    getUserName(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        return user;
    }
    isUserLoggedIn(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        //console.log("isUserLoggedIn in as");

        if(user === null) return false
        return true;
    }

    setUpAxioxInterceptors(token){

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
} 

export default new AuthenticationService()