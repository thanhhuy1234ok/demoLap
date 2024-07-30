import React from 'react';
import { deleteProduct } from '../services/productService';

const DeleteProduct = ({ productId }) => {
    const handleDelete = async () => {
        await deleteProduct(productId);
        // Optionally, refresh the product list or navigate to another page
    };

    return <button onClick={handleDelete}>Delete Product</button>;
};

export default DeleteProduct;
