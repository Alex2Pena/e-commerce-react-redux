import React from 'react';
import { connect } from 'react-redux';
import { product, reset } from '../store/products.js'

const Cart = props => {
    let cartTotal = props.cart.reduce((counter, cartItem) => {
        return counter + cartItem.cartQuantity
    }, 0)
    return (
        <aside style={{ backgroundColor: 'lightgrey', position: 'absolute', right: '0', top: '0', width: '500px' }}>
            <h3>Cart ({cartTotal})</h3>
            <ul>
                {props.cart.map((item, idx, arr) => {
                    return <li key={idx}>
                        <span>{item.name} - x {item.cartQuantity}: ${item.price * item.cartQuantity}</span>
                    </li>
                })}
            </ul>
        </aside>
    )
}

const mapStateToProps = (state) => ({
    reset,
    cart: state.cart
})

export default connect(mapStateToProps)(Cart)