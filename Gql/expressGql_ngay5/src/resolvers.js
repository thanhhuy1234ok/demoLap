const Book = require('./models/book.model')
const Author = require('./models/author.model')
const resolvers = {
    Query: {
        books: async () => await Book.find(),
        authors: async () => await Author.find(),
        book: async (parent, args) => await Book.findById(args.id),
        author: async (parent, args) => await Author.findById(args.id),
    },
    Mutation: {
        addBook: async (parent, args) => {
            const book = new Book({
                title: args.title,
                price: args.price,
                quantity: args.quantity,
                description: args.description,
                authorId: args.authorId
            });

            const savedBook = await book.save();

            await Author.findByIdAndUpdate(
                args.authorId,
                { $push: { books: savedBook._id } },
                { new: true, useFindAndModify: false }
            );

            return savedBook;
        },
        addAuthor: async (parent, args) => {
            const author = new Author({
                name: args.name,
                email: args.email,
                dateOfBird: args.dateOfBird,
                gender: args.gender,
                address: args.address,
                phone: args.phone,
                password: args.password,
                image: args.image,
            });
            return await author.save();
        },
    },
    Book: {
        author: async (parent) => await Author.findById(parent.authorId),
    },
    Author: {
        books: async (parent) => await Book.find({ authorId: parent.id }),
    },
};

module.exports = resolvers