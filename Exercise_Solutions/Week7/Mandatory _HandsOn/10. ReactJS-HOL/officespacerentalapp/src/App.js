import logo from './logo.svg';
import './App.css';
import officeImg from "./office.png"; // place your image in src folder


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



function App() {
  // JSX element for heading
  const element = "Office Space";

  // JSX attribute example for image
  const jsxatt = (
    <img
      src={officeImg}
      width="25%"
      height="25%"
      alt="Office Space"
    />
  );

  // List of office spaces
  const offices = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "WeWork", Rent: 65000, Address: "Bangalore" },
    { Name: "Regus", Rent: 45000, Address: "Hyderabad" }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      {/* Render heading */}
      <h1>{element}, at Affordable Range</h1>

      {/* Loop through office list */}
      {offices.map((item, index) => {
        // Conditional rent color
        const rentStyle = {
          color: item.Rent <= 60000 ? "red" : "green"
        };

        return (
          <div key={index} style={{ margin: "20px" }}>
            {jsxatt}
            <h2>Name: {item.Name}</h2>
            <h3 style={rentStyle}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;