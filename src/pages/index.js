import React from 'react';
import { Link } from 'gatsby';

/* eslint-disable */

const IndexPage = () => {
    return (
        <div>
            <h1>Hello.</h1>
            <h2>I'm Bill, a front-end engineer living in beautiful Seattle</h2>
            <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
        </div>
    )
};

export default IndexPage;
