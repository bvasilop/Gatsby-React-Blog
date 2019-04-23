import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact" />
                    <h1>Contact</h1>
                    <p>If you are interested in connecting with me about other projects, I'd love to hear from you!</p>
                    <h2>Contact Info:</h2>
                    <ul className="contacts">
                    <li >
                        <a href="mailto:bvasilop@gmail.com" target="_blank" data-toggle="tooltip" title="Send me an Email!">
                            bvasilop@gmail.com
                        </a>
                            </li>
                            <li>
                                <a href="https://www.billvas.com" target="_blank" data-toggle="tooltip" title="Visit my website!">
                                    billvas.com
                                </a>
                            </li>
                    </ul>
            </Layout>
        </div>
    )
};

export default ContactPage;
