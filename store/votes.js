let initialState = {
    products: [
        {category: '', 
        name: '', 
        description: '', 
        price: 0, 
        inventory: 0}
    ]
}

// Reducer is a PURE function that returns a copy of the state with new data.
  export default (state = initialState, action) => {
    let { type, payload } = action;
  
    switch(type) {
      // 'INCREMENT' meets the "type" from our "increment()" action creator
      case 'INCREMENT':
        let totalVotes = state.totalVotes + 1;
        // create a copy of the state, which is currently an array of candidates
        // and return that copy with applied vote count
        let candidates = state.candidates.map(candidate => {
          if (candidate.name === payload) {
            return { name: candidate.name, votes: candidate.votes + 1}
          }
  
          return candidate;
        })
  
        // this returns the copy
        return { totalVotes, candidates }
  
      // take us back to the initial state, but hold a history of all previous interactions anyway
      case 'RESET':
        return initialState;
      
      default:
        return state;
    }
  }
  
  
  // action creator -> function that returns an action
  // and action is a simple object with a type and often a payload as well
  export const increment = (name) => {
    return {
      type: 'INCREMENT',
      payload: name
    }
  }
  
  export const reset = () => {
    return {
      type: 'RESET'
    }
  }