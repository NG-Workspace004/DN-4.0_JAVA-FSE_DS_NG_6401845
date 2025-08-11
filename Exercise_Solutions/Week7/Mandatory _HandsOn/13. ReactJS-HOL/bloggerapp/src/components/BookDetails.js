import React from 'react';

export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 }
];

function BookDetails() {
  // Conditional rendering using && short-circuit
  const bookdet = (
    <ul>
      {books.length > 0 && books.map(book => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  return (
    <div style={{ borderRight: '3px solid green', padding: '0 40px' }}>
      <h1>Book Details</h1>
      {bookdet}
    </div>
  );
}

export default BookDetails;
