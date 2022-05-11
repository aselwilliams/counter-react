import {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={}
  }
  render(){
  return (
    <div className="main-container">
    <h1>Counter</h1>
    <span id="counter">0</span>
    <div className="btn-wrapper">
        <button className="btn increase">Increase</button>
        <button className="btn reset">Reset</button>
        <button className="btn decrease">Decrease</button>
      </div>
    </div>
    );
  }
  
}

export default App;
