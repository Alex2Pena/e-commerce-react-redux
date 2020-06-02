import React from 'react';
import { connect } from 'react-redux';
import { increment, reset } from '../store/votes.js';

const VotesCounter = props => {
  return (
    <section>
      <ul>
        {props.counter.candidates.map((person, idx) => {
          return <li onClick={() => props.increment(person.name)} key={idx}>{ person.name } : { person.votes }</li>
        })}
      </ul>

      <button onClick={props.reset}>Reset Votes!</button>
    </section>
  )
}

const mapStateToProps = state => ({
  counter: state.votes
});

// new pattern that removes the need for importing a dispatcher directly
const mapDispatchToProps = { increment, reset };

// old school way of creating dispatchers assigned to props
// const mapDispatchToProps = state = ({
//   increment: () => dispatch(increment()),
//   reset: () => dispatch(reset())
// });

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);