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
        return {...state, currentCategory:  action.payload }
    } else {
        return state;
    }
}
