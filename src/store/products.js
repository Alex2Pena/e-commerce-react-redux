let initialState = [{
      category: 'tools',
      name: 'Hammer Set',
      desc: 'Break or fix stuff!',
      price: 35.00,
      count: 0
    },
    {
      category: 'tools',
      name: 'Screw Driver Set',
      desc: 'Screw it in or screw it out!',
      price: 15.00,
      count: 20
    },
    {
      category: 'tools',
      name: 'Socket Set',
      desc: 'Lefty loosie, righty tighty!',
      price: 100.00,
      count: 17
    },
    {
      category: 'tools',
      name: 'Wrench & Plyer Set',
      desc: 'Get a grip dude!',
      price: 50.00,
      count: 12
    },
    {
      category: 'games',
      name: 'Cards against humanity',
      desc: 'Do you know your friends?',
      price: 30.00,
      count: 22
    },
    {
      category: 'games',
      name: 'Poker Set',
      desc: 'Comes with cards & chips!',
      price: 20.00,
      count: 6
    },
    {
      category: 'games',
      name: 'Black Jack Set',
      desc: 'Comes with cards & chips!',
      price: 20.00,
      count: 6
    },
    {
      category: 'games',
      name: 'Farkle',
      desc: 'Most fun you can have with dice!',
      price: 5.00,
      count: 32
    },
    {
      category: 'electronics',
      name: 'VR Headset',
      desc: 'Go anywhere from anywhere!',
      price: 650.00,
      count: 23
    },
    {
      category: 'electronics',
      name: 'Laptop Computer',
      desc: 'Get stuff done on the go!',
      price: 1850.00,
      count: 10
    },
    {
      category: 'electronics',
      name: 'Desktop Computer',
      desc: 'Your dream machine!',
      price: 1550.00,
      count: 23
    },
    {
      category: 'electronics',
      name: 'Smart Phone',
      desc: 'Stay connected anywhere, anytime!',
      price: 650.00,
      count: 18
    },
    {
      category: 'clothing',
      name: 'Hat',
      desc: 'Cover your dome!',
      price: 150.00,
      count: 8
    },
    {
      category: 'clothing',
      name: 'Shrit',
      desc: 'Long and short sleve!',
      price: 150.00,
      count: 8
    },
    {
      category: 'clothing',
      name: 'Pants',
      desc: 'Bulit to last!',
      price: 150.00,
      count: 8
    },
    {
      category: 'clothing',
      name: 'Shoes',
      desc: 'Most comfortable ever!',
      price: 150.00,
      count: 8
    }
  ]

// Reducer is a PURE function that returns a copy of the state with new data.
export default (state = initialState, action) => {
  let {
    type,
    payload
  } = action;

  // take us back to the initial state, but hold a history of all previous interactions anyway
  switch (type) {
    case 'SELECT_CATEGORY': {
      console.log('state in products.js', state)
    return initialState.filter((product) => product.category === payload)
  }
    case 'RESET':
      return initialState;
      
    case "ADD_TO_CART": {
    // when an item is added to the card, reduce the count of that item by 1
    return [...state, ]
  }
    default:
      return state;
  }
}

export const reset = () => ({ type: "RESET"})