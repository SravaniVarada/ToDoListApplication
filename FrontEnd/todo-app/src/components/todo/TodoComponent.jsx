import React, { Component } from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import AuthenticationService from '../../api/todoapp/AuthenticationService.js'
import ListTodosService from '../../api/todoapp/ListTodosService.js'

class TodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            userName: AuthenticationService.getUserName(),
            description: '',
            isDone: '',
            targetDate: '',
            successMessage: ' '
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
        //this.getTodo = this.getTodo.bind(this)
    }

    onSubmit(values) {
        console.log('after submit  == ')
        console.log(values,this.state.username)
        let todo = {
            id: this.state.id,
            userName: AuthenticationService.getUserName(),
            description: values.description,
            isDone: values.isDone,
            targetDate: values.targetDate
        }

        
        if (this.state.id === -1) {
            ListTodosService.createTodo(AuthenticationService.getUserName(), todo)
            .then(() => this.props.history.push('/todos'))
        } else {
            ListTodosService.updateTodo(AuthenticationService.getUserName(), this.state.id, todo)
            .then(() => this.props.history.push('/todos'))

            // this.setState = {
            //     successMessage: 'Successfully updated :)'
            // }
        }
    }

    validate(values) {
        let errors = {}

        if (!values.description) {
            errors.description = 'Enter description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter atleast 5 characters in description'
        }

        if (!values.isDone) {
            errors.isDone = 'Enter status'
        } else if (values.isDone !== 'yes' && values.isDone !== 'no') {
            errors.isDone = 'Enter valid status'
        }

        if (!moment(values.targetDate).isValid) {
            errors.targetDate = 'Enter a valid target date'
        }
        //console.log(values)
        return errors
    }

    componentDidMount() {
        if (this.state.id === -1) {
            return
        }
        ListTodosService.retrieveTodo(AuthenticationService.getUserName(), this.state.id)
            .then(
                response => {
                    console.log(response.data);
                    this.setState({
                        description: response.data.description,
                        isDone: response.data.isDone,
                        targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                    })
                }
            )

    }

    render() {

        //this.getTodo()
        let { description, isDone, targetDate } = this.state
        // same as let description = this.state.description
        // let isDone = this.state.isDone
        // let targetDate = this.state.targetDate

        return (
            <div>
                <h1>ToDo</h1>
                <div className="container">
                    <Formik
                        initialValues={{ description, isDone, targetDate }} //same as username : username, 
                        onSubmit={this.onSubmit}
                        validateOnBlur={false}
                        validateOnChange={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="isDone" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />

                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>IsDone</label>
                                        <Field className="form-control" type="text" name="isDone" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>TargetDate</label>
                                        <Field className="form-control" type="Date" name="targetDate" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>

                                </Form>
                            )
                        }
                    </Formik>
                </div>
                <div>
                    {this.state.successMessage}
                </div>
            </div>
        )
    }
}

export default TodoComponent