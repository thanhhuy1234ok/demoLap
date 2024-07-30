// src/components/AddBook.js
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_BOOK = gql`
  mutation AddBook($title: String!, $authorId: ID!, $price:Int, $quantity:Int) {
    addBook(title: $title, authorId: $authorId, price: $price, quantity:$quantity) {
      id
      title
      price
      quantity
      author {
        name
      }
    }
  }
`;

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [quantity, setquantity] = useState(0);
    const [price, setprice] = useState(0);
    const [addBook] = useMutation(ADD_BOOK);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, quantity, price, authorId)
        addBook({ variables: { title, authorId, quantity: parseInt(quantity, 10), price: parseInt(price, 10) } });
        setTitle('');
        setAuthorId('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Author ID:
                    <input
                        type="text"
                        value={authorId}
                        onChange={(e) => setAuthorId(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    quantity:
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setquantity(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    price:
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                    />
                </label>
            </div>
            <button type="submit">Add Book</button>
        </form>
    );
};

export default AddBook;
