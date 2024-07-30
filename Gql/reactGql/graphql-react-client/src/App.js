// src/App.js
import React from 'react';
import Books from './component/listing-book';
import AddBook from './component/add-book';

const App = () => (
  <div>
    <h1>GraphQL React Client</h1>
    <AddBook />
    <Books />
  </div>
);

export default App;