import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

/* eslint-disable */

const AboutPage = () => {
    return (
        <div>
        <Layout>
            <h1>About</h1>
            <p>I'm Bill Vasilopoulos and I like to build beautiful websites here in Seattle</p>
            <p><Link to="/contact">Contact Me</Link></p>
            </Layout>
        </div>
    )
};

export default AboutPage;
