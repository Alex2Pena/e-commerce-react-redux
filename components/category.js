import React from 'react';
import { connect } from 'react-redux';

const Status = props => {
  return (
    <section>
      {props.totalVotes}
    </section>
  )
}

// this function does what is in the name of it
// we are pulling the state from state.votes.totalVotes and
// creating a prop called totalVotes that contains the state
const mapStateToProps = state => ({
  totalVotes: state.votes.totalVotes
})

// when we export our component, we need to do so with the state attached to a prop
// this connector method (connect) does that
// the first call takes in mapStateToProps (and possibly others) and the
// second call takes in your component
export default connect(mapStateToProps)(Status);