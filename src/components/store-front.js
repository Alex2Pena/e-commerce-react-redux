import React from 'react';
import Category from './category.js';
import Product from './products.js';
import Cart from './cart.js';
// Rendering categories and products
export default props => {
    return (
        <>
            <Cart />
            <Category />
            <Product />
        </>
    )
}
