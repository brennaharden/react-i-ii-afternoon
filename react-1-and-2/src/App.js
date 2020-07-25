import React from 'react';
import Nav from './Nav';
import Card from './Card';
import data from './data'

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
            data,
            index: 0
    }
    this.increaseChange = this.increaseChange.bind(this)
    this.decreaseChange = this.decreaseChange.bind(this)
  }

  increaseChange = () => {
    this.state.index < 24 ? this.setState({index: this.state.index + 1}) : this.setState({index: this.state.index})
  }

  decreaseChange = () => {
    this.state.index > 0 ? this.setState({index: this.state.index - 1}) : this.setState({index: this.state.index})
  }

  render(){
    
  return (
    <div className="app">
      <header>
        <h3>Home</h3>
      </header>
      <div className="container">
      <Card className="card"
          employees={this.state.data}
          index={this.state.index}/>
      <Nav className="nav"
          nextChange={this.increaseChange}
          previousChange={this.decreaseChange}/>
      </div>

    </div>
  );
}
}

export default App;
