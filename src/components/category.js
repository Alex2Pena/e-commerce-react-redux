import React from 'react';
import { connect } from 'react-redux';
import { product } from '../store/products.js'

const Categories = props => {
  console.log('props in Categories component', props)
  
  return (
    <section>
      <h3>Active category: {props.currentCategory}</h3>
      <ul>
        {props.categories.map((cat, idx, arr) => {
          return <li onClick={() => props.dispatch({
            type: "SELECT_CATEGORY",
            payload: cat.name
          })} key={idx}>
            <span>Display name: {cat.displayName}</span>
            <span>Name: {cat.name}</span>
            <span>Desc: {cat.desc}</span>
          </li>
        })}
      </ul>
    </section>
  )
}



//  HINT - SET <li>'S
// {props.candidates.map((person, idx) => {
//   return <tr className={person.disabled ? 'disabled' : ''}
//     onClick={() => person.disabled ? {} : props.increment(person)}
//     onClick={() => props.disable(person)}
//     key={idx}>


// this function does what is in the name of it
// we are pulling the state from state.votes.totalVotes and
// creating a prop called totalVotes that contains the state
const mapStateToProps = state => {
    console.log('state in category component', state)
  return ({
  // Categories: state.product.Categories
  categories: state.category.categoryArray,
  currentCategory: state.category.currentCategory
})}

// when we export our component, we need to do so with the state attached to a prop
// this connector method (connect) does that
// the first call takes in mapStateToProps (and possibly others) and the
// second call takes in your component
export default connect(mapStateToProps)(Categories);

// What is dispatch & action creator?