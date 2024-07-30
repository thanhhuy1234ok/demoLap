import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct } from '../services/productService';

const ProductForm = ({ product, isEdit, onComplete }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (product) {
            setName(product.attributes.name);
            setDescription(product.attributes.description);
            setPrice(product.attributes.price);
            setQuantity(product.attributes.quantity);
        }
    }, [product]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = { name, description, price: parseFloat(price), quantity: parseInt(quantity, 10) };

        try {
            if (isEdit) {
                await updateProduct(product.id, productData);
            } else {
                await createProduct(productData);
            }
            onComplete();
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Error creating/updating product');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div>
                <label>Quantity</label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit">{isEdit ? 'Update' : 'Create'} Product</button>
        </form>
    );
};

export default ProductForm;
