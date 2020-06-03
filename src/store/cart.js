let initialState = []

export default function reducer(state = initialState, action) {
    if (action.type === "ADD_TO_CART") {
        return [...state, action.payload]
    } else {
        return state
    }
}