import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js'
import StoreFront from './components/store-front.js';

export default props => {
    return (
        <React.Fragment>
            <Header />
            <StoreFront />
            <Footer />
        </React.Fragment>
    )
}