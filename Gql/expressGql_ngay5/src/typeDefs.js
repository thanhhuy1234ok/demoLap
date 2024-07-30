const { gql } = require('apollo-server-express')
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    quantity: Int
    price: Int
    description: String
    author: Author
  }

  type Author {
    id: ID!
    name: String!
    email: String,
    dateOfBird: String,
    gender: String,
    address: String,
    phone: String,
    password: String,
    image: String,
    books: [Book]
  }

  type Query {
    books: [Book]
    authors: [Author]
    book(id: ID!): Book
    author(id: ID!): Author
  }

  type Mutation {
    addBook(title: String!, quantity:Int, price:Int, description:String, authorId: ID!): Book
    addAuthor(name: String!
      email: String,
    dateOfBird: String,
    gender: String,
    address: String,
    phone: String,
    password: String,
    image: String,
    books:[ID]): Author
  }
`;

module.exports = typeDefs