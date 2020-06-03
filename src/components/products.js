import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../store/products'


const Products = props => {
  console.log('props in Product component', props)
  return (
    <section>
      <h3>Products list</h3>
      <ul>
        {props.products.map((product, idx) => <li key={idx}>{product.name} 
        {!!product.count && <button onClick={() => props.addToCart(product)}>Add to Cart</button>}
        </li>
        
        )}
      </ul>

      <button onClick={props.reset}>Reset View!</button>
      {/* old way - before using mapDispatchToProps */}
      {/* <button onClick={() => props.dispatch({ type: "RESET" }))}>Reset View!</button> */}
    </section>
  )
};

const mapStateToProps = state => ({
  products: state.products
});

// new pattern that removes the need for importing a dispatcher directly
const mapDispatchToProps = { 
  reset,
  addToCart: (product) => ({type: "ADD_TO_CART", payload: product})
 };


export default connect(mapStateToProps, mapDispatchToProps)(Products);