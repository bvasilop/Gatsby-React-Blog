import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
/* eslint-disable */

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
};

export default Layout;
