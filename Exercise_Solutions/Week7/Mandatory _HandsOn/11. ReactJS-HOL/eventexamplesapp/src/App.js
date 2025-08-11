import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    // Binding for `this` keyword usage
    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  // Method 1 - Increment
  increment() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }

  // Method 2 - Say Hello
  sayHello() {
    alert("Hello! This is a static message after increment.");
  }

  // Decrement
  decrement = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  // Passing arguments
  sayWelcome = (msg) => {
    alert(msg);
  };

  // Synthetic event example
  handleClick = (event) => {
    // `event` here is a SyntheticEvent
    console.log(event); // You can inspect it in console
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Event Handling Examples</h1>

        {/* Counter Section */}
        <h2>Counter: {this.state.counter}</h2>
        <button
          onClick={() => {
            this.increment(); // Method 1
            this.sayHello();  // Method 2
          }}
        >
          Increment
        </button>
        &nbsp;
        <button onClick={this.decrement}>Decrement</button>

        <hr />

        {/* Passing argument */}
        <button onClick={() => this.sayWelcome("Welcome to React Events!")}>
          Say Welcome
        </button>

        <hr />

        {/* Synthetic event */}
        <button onClick={this.handleClick}>OnPress (Synthetic Event)</button>

        <hr />

        {/* Currency Converter Component */}
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
