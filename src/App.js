import logo from './logo.svg';
import './App.css';
import React,{} from 'react';


//Methods syntax 
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}


//Button Method
class MainButton extends React.Component {
  shoot() {
    alert("Great Shot!");
  }
  render() {
    return (
      <div className="buttonMain">
       <button onClick={this.shoot}>Take the shot!</button>
      </div>
    );
  }
}
//src\App2.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>this is how we do</code> and save to reload.
        </p>

        <MainButton /> 
        
        <h1>Hello world!</h1>
        
        <ShoppingList />
       
        
        

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;



