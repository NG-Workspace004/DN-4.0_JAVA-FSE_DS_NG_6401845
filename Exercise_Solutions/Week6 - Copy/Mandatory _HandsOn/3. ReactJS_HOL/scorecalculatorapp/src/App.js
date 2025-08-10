import logo from './logo.svg';
import './App.css';

import CalculateScore from './Components/CalculateScore';

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

function App() {
  return (
    <div>
      <CalculateScore 
        Name="John Doe" 
        School="ABC School" 
        total="500" 
        goal="600" 
      />
    </div>
  );
}

export default App;
