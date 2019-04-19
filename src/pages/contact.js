import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

/* eslint-disable */

const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contact</h1>
            <h2>Contact Info:</h2>
            <ul>
            <li>
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
            <Footer />
        </div>
    )
};

export default ContactPage;
