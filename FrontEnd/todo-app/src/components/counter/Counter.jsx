import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component {

    constructor(){
        super();
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)        
        this.reset = this.reset.bind(this)
    }

    render() {
        return (
          <div className="Counter">
            <CounterButton by = {1} incrementMethod = {this.increment} decrementMethod = {this.decrement}></CounterButton>
            <CounterButton by = {5} incrementMethod = {this.increment} decrementMethod = {this.decrement}></CounterButton>
            <CounterButton by = {10} incrementMethod = {this.increment} decrementMethod = {this.decrement}></CounterButton>

            <span className="count">{this.state.counter}</span>

            <div><button className="resetButton" onClick={this.reset}>Reset</button></div> 
        </div>
        );
    }

    increment(by){
        //console.log(`increment in parent - ${by}`)
        this.setState(
            (prevState) => {
            return {counter : prevState.counter + by}
            }
        );
        //console.log(`counter in parent - ${this.state.counter}`)
     
    }

    decrement(by){
        //console.log(`increment in parent - ${by}`)
        this.setState(
            (prevState) => {
            return {counter : prevState.counter - by}
            }
        );
        //console.log(`counter in parent - ${this.state.counter}`)
     
    }

    reset(){
        //console.log("reset in parent")
        this.setState({
            counter : 0 
        });
    }
}

//class component
class CounterButton extends Component {

    constructor(){
        super();
        // this.state = {
        //     counter: 0          //multiple variable can be initialized in constructor,
        // }                       //but only variables that are updated in setstate() method will get affected

      // this.increment = this.increment.bind(this)  //not needed if increment() method is binded using arrow as shown below
       //this.decrement = this.decrement.bind(this)
    }
    render() {
        return (
            <div className="CounterButton">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>

                {/* <span className="count">{this.state.counter}</span> */}
            </div>
        )
    }


    // decrement() {                          
    //     this.props.decrementMethod(this.props.by)
    // }

   // increment() {                                   //increment = () => {   }
        // console.log('increment')
         //this.state.counter++;

         //    this.setState({
        //        counter : this.state.counter + this.props.by
         //    });

    //  this.props.incrementMethod(this.props.by)
    // }

}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter