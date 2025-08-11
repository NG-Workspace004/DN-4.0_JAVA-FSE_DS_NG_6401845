import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Example of preventing a component from rendering
  const SecretMessage = ({ show }) => {
    if (!show) return null;
    return <p style={{ color: "green" }}>🎉 You have special access!</p>;
  };

  // Example of element variables
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={() => setIsLoggedIn(false)} />;
  } else {
    button = <LoginButton onClick={() => setIsLoggedIn(true)} />;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Ticket Booking App</h1>

      {/* Conditional Rendering */}
      <Greeting isLoggedIn={isLoggedIn} />

      <hr />

      {/* Element Variable */}
      {button}

      <hr />

      {/* Prevent rendering */}
      <SecretMessage show={isLoggedIn} />
    </div>
  );
}

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
