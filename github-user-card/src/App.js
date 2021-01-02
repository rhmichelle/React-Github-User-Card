import React from 'react';
import User from './Components/User';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      user: {}
  }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/maggieappleton')
    .then(response => response.json())
    .then(json => {
      this.setState({
        user:json
      })
    })
  }





  render() {
  return (
    <div className="App">
      <header className="App-header">
        <User user={this.state.user}/>

      </header>
    </div>
  );
}}

export default App;
