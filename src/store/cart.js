let initialState = []

export default function reducer(state = initialState, action) {

    if (action.type === "ADD_TO_CART") {
        let cartItems = [...state]        
        for (let i = 0; i < cartItems.length; i++) {
            // if the item is already in the cart
            if (cartItems[i].name === action.payload.name) {
                cartItems[i].cartQuantity++
                return cartItems
            }
        }
        // if the item isn't in the cart yet - add it
        let cartItem = {
            ...action.payload,
            cartQuantity: 1
        }
        delete cartItem.count
        return [...state, cartItem]

    } else if (action.type === 'RESET') {
        return initialState;
    } else {
        return state
    }
}