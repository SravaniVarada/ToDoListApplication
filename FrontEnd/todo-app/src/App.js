import React, { Component } from 'react';
// import FirstClassComp from './components/learning-examples/FirstComponent'
// import SecondClassComp from './components/learning-examples/SecondComponent'
// import FirstFunctionComp from './components/learning-examples/ThirdComponent'
// import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp'
import './App.css';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter></Counter> */}
        <TodoApp/>
      </div>
    );
  }
}

// class LearningComponent extends Component {
//   render() {
//     return (
//       <div className="LearningComponent">
//         My Hello World in LC
//         <FirstClassComp /> 
//         <SecondClassComp />
//         <FirstFunctionComp />
//       </div>
//     );
//   }
// }


export default App;