import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../services/productService';
import ProductForm from './ProductForm';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [error, setError] = useState(null);
    const fetchProducts = async () => {
        try {
            const products = await getProducts();
            setProducts(products.data);
        } catch (error) {
            setError(error.response ? error.response.data : 'Error fetching products');
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleEdit = (product) => {
        console.log(product)
        setSelectedProduct(product);
        setIsEdit(true);
    };

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Error deleting product');
        }
    };

    if (error) {
        return <div>Error: {error.message || error}</div>;
    }
    const handleFormComplete = () => {
        setIsEdit(false);
        setSelectedProduct(null);
        fetchProducts(); // Refetch products after form completion
    };
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {Array.isArray(products) && products.map(product => (
                    <li key={product.id}>
                        {product.attributes.name} - {product.attributes.description} - ${product.attributes.price} - Quantity: {product.attributes.quantity}
                        <button onClick={() => handleEdit(product)}>Edit</button>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            {isEdit && (
                <ProductForm
                    product={selectedProduct}
                    isEdit={isEdit}
                    onComplete={handleFormComplete}
                />
            )}
        </div>
    );
};

export default ProductList;
