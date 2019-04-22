import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';


/* eslint-disable */

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About" />
                    <h1>About</h1>
                    <p>I'm Bill Vasilopoulos and I like to build beautiful websites here in Seattle</p>
                    <p><Link to="/contact">Contact Me</Link></p>
                </Layout>
        </div>
    )
};

export default AboutPage;
