import axios from "axios"
import {API_URL} from '../../Constants'

class HelloWorldService{
    executeHelloWorldService(){
        return axios.get(`${API_URL}/helloworldBean`);
    }

    executeHelloWorldPathVariableService(name){

        // let username = 'sravani'
        // let password = 'sravs'
        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        return axios.get(`${API_URL}/helloworld/path-variable/${name}`
        // ,
        // {
        //     headers : {
        //         authorization : basicAuthHeader
        //     }
        // }
        ); // ` mark is used to replac variable value
    }
}

export default new HelloWorldService()