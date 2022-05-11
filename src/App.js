import {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  handleCounter=(e)=>{
    let {count}=this.state;
    let targetClass =e.currentTarget.classList;
    console.log(targetClass)
    if (targetClass.contains('increase')) {
        count++;
    } else if (targetClass.contains('decrease')) {
        count--;
    } else {
        count = 0;
    }
  }
  render(){
  return (
    <div className="main-container">
    <h1>Counter</h1>
    <span id="counter">0</span>
    <div className="btn-wrapper">
        <button onClick={this.handleCounter} className="btn increase">Increase</button>
        <button onClick={this.handleCounter} className="btn reset">Reset</button>
        <button onClick={this.handleCounter} className="btn decrease">Decrease</button>
      </div>
    </div>
    );
  }
  
}

export default App;
