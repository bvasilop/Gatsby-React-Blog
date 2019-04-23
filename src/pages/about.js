import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About" />
                    <h1>About</h1>
                    <h2>I'm Bill Vasilopoulos and I like to build beautiful websites here in Seattle</h2>
                    <p><Link to="/contact">Contact Me</Link></p>
                </Layout>
        </div>
    )
};

export default AboutPage;
