import React from 'react';
import { connect } from 'react-redux';
import { product, reset } from '../store/products.js'

const Cart =  props => (
    <div>
        <h3>Cart ({props.cart.length})</h3>
        {/* map out items in cart
        for each item in props.cart array, render out the item name in an <li>
        */}
    </div>
)

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps)(Cart)