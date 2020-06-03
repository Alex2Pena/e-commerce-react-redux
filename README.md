# e-commerce-react-redux
*https://github.com/Alex2Pena/e-commerce-react-redux.git*
- Assignment: E-Commerce Application
- Write a React application that will serve as the online store for a fictional company


### Lab 36

*For this assignment, we’ll be using Redux to manage a list of categories and products*

**Requirements**
- Design your application with a header, main section, and a footer
- The overall styling is up to you
- Display a list of categories
    - When the user selects (clicks on) a category …
    - Identify that category as selected
    - Show a list of products associated with the category
- Implementation Notes/Details
    - Manage state in a Redux store
- Categories
    - State should contain a list of categories as well as the active category
    - Each category should have a normalized name, display name, and a description
    - Create an action that will trigger the reducer to change the active category
    - Update the active category in the reducer when this action is dispatched
- Products
    - State should be a list of all products
    - Each product should have a category association, name, description, price, inventory count
    - Create an action that will trigger the reducer to filter the product list when the active category is changed
        - HINT: Different reducers can respond to the same actions
    - Create a reducer that will filter the products list based on the active category
    - Create 2 components
        `<Categories />`
            - Shows a list of all categories
            - Dispatches an action when one is clicked to “activate” it
        `<Products />`
            - Displays a list of products associated with the selected category

### Lab 37

**Requirements**
- Design your application with a header, main section, and a footer
    - The overall styling is up to you
    - Add an “Items in Cart” indicator to the header, like this: Cart (0)
        - Or … use your creativity to use an icon, count bubble, etc.
- Home Page Operation:
    - Display a list of categories
    - When the user selects (clicks on) a category …
        - Identify that category as selected
        - Show a list of products associated with the category
        - The product listings should show the title, description, image, # in stock, and the price
        - If the number in stock > 0, also show an “add to cart” button
    - When a user clicks the “add to cart” button add the item to their cart
        - On the page, show a running list of the items in the cart (just the titles)
        - Change the (0) indicator in the header to show the actual number of items in the cart
        - Reduce the number in stock for that product
        
**Implementation Notes/Details**
*Manage state in a Redux store with multiple reducers/actions*

- Categories
    - State should be a list of categories as well as the active one
        - Each category should have a normalized name, display name, and a description
    - Create an action that will trigger the reducer to change the active category
    - Update the active category in the reducer when this action is dispatched
- Products
    - State should be a list of all products
        - Each product should have a category association, name, description, price, inventory count
    - Create an action that will trigger the reducer to filter the product list when the active category is changed
        - HINT: Different reducers can respond to the same actions
    - Create a reducer that will filter the products list based on the active category
    - Create an action that will trigger the reducer to reduce the stock counter
    - Create a reducer that reduces the # in stock when that action is dispatched
- Cart
    - State should be an array of products that have been added (all product details)
    - Create an action that will trigger the reducer to add the selected item to the cart
        - Hint: this could be the same action type as you create for the Products reducer
    - Create a reducer that adds the product to the array of items in state
- Page Operation
    - Create the following components for the Home Page
        `<Categories />`
            - Shows a list of all categories
            - Dispatches an action when one is clicked to “activate “ it
        `<Products />`
            - Displays a list of products associated with the selected category
        `<SimpleCart />`
            - Displays a short list (title only) of products in the cart

**Stretch Goal**
    - Add a “Remove from Cart” button to each item in the cart
        - Change the indicator in the menu
        - Add 1 back to the # in stock for that product