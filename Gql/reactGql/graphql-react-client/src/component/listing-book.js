// src/components/Books.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      quantity
      price
      author {
        name
      }
    }
  }
`;

const Books = () => {
    const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <h2>Books</h2>
            <ul>
                {data.books.map(({ id, title, author, quantity, price }) => (
                    <li key={id}>
                        <strong>{title}</strong> by {author.name} || <strong>quantity: {quantity}</strong> ||<strong> price: {price}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Books;