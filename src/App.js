import {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  handleCounter = (e) => {
    let {count} = this.state;
    let targetClass = e.currentTarget.classList;
    console.log(targetClass)

    if (targetClass.contains('increase')) {
        this.setState({count: count + 1})
    } else if (targetClass.contains('decrease')) {
        this.setState({count: count - 1})
    } else {
        this.setState({count: 0})
    }

    // if (count > 0) {
    //   counter.style.color = 'green'
    // } else if (count < 0) {
    //   counter.style.color = 'salmon'
    // } else {
    //   counter.style.color = 'darkblue'
    // }
  }
  render(){
    let {count} = this.state;
  return (
    <div className="main-container">
    <h1>Counter</h1>
    <span id="counter" className={count>0 ? 'green' : 'salmon'}>{count}</span>
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
