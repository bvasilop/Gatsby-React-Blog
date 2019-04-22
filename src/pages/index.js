import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

/* eslint-disable */

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
                <h1>Hello.</h1>
                <h2>I'm Bill, a front-end engineer living in beautiful Seattle</h2>
                <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
};

export default IndexPage;
