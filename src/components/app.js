import React from 'react';
import Header from './header';
import Footer from './footer.js';
import StoreFront from './store-front';

export default props => {
    return (
        <React.Fragment>
            <Header />
            <StoreFront />
            <Footer />
        </React.Fragment>
    )
}