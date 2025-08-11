import React from 'react';

function Scorebelow70({ players }) {
  const players70 = [];
  players.forEach(item => {
    if (item.score < 70) {
      players70.push(item);
    }
  });

  return (
    <ul>
      {players70.map((item, index) => (
        <li key={index}>
          Mr. {item.name} {item.score}
        </li>
      ))}
    </ul>
  );
}

export default Scorebelow70;
