let initialState = {
    categoryArray: [{
            displayName: 'Tools',
            name: 'tools',
            desc: 'What you need to do the job!'
        },
        {
            displayName: 'Games',
            name: 'games',
            desc: 'Time flys when your having fun!'
        },
        {
            displayName: 'Electronics',
            name: 'electronics',
            desc: 'Get your tech on!'
        },
        {
            displayName: 'Clothing',
            name: 'clothing',
            desc: 'Find your look!'
        },
    ],
    currentCategory: ""
};

// Reducer is a PURE function that returns a copy of the state with new data.
export default (state = initialState, action) => {

    if (action.type === 'SELECT_CATEGORY') {
        // { type: "SELECT_CATEGORY", payload: "tools" }
        /*
         let obj = { hi: 'hi', test: 'wut' }
         let copyOfObj = { ...obj }
        let objWithNewThing = { ...obj, newThing: 'hi' }
        let objWithCHangedThing = { ...obj, hi: 'bye' }
        // { hi: 'bye', test: 'wut' }

        */
        return {...state, currentCategory:  action.payload }
    } else {
        // default case - return state
        return state;
    }


    // let { type, payload } = action;
/* 
shape of action object
 {
     type: "type of action",
     payload: {
         stuff: "important data for this action"
     }
 }

 {
     type: "ACTIVE"
 }
*/
    // switch (type) {
    //     case 'MAKE_ACTIVE_CATEGORY': {

    //     }

    //     case 'ACTIVE':
    //         let categoryArray = state.categoryArray;
    //         let currentCategory = payload;
    //         return {
    //             currentCategory, categoryArray
    //         }
    //         case 'RESET':
    //             return initialState;
    //         default:
    //             return state;
    // }

    // take us back to the initial state, but hold a history of all previous interactions anyway
}

/* 
actions

{
    type: "ADD_THING",
    payload: { name: 'alex' }
}

{
    type: "SELECT_ACTIVE_CATEGORY",
    payloud: { categoryId: 123435 }
}
*/

// function reducerExample(state, actionObj) {
//     // depending on the action type, do a different thing to state and return new state
//     if (actionObj.type === "DO_THIS_THING") {
//         // do the thing
//         let newState = {...state, newThing: 'hi'}
//         return newState
//     } else if (actionObj.type === "ANOTHER_THING") {
//         // something else
//     } else if (actionObj.type === "SELECT_ACTIVE_CATEGORY") {
//         // make given category the active one in state
//         let id = actionObj.payload.id;
//         let newState = {...state, activeCategory: state.categories[id]}
//         return newState;
//      } else {
//         return state
//     }
// }