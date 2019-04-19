import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';

/* eslint-disable */

const AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
            <p>I'm Bill Vasilopoulos and I like to build beautiful websites here in Seattle</p>
            <p><Link to="/contact">Contact Me</Link></p>
            <Footer />
        </div>
    )
};

export default AboutPage;
