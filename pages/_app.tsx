import React from 'react';
import App, { Container } from 'next/app';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/superhero/bootstrap.min.css"; 
import './_global.css';

import { config, library} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { faInfo, faKeyboard, faHeadset, faHandshake, faSearch, faSync, faHistory, faPercentage, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
library.add(faDiscord, faTwitter, faInfo, faKeyboard, faHeadset, faHandshake, faSearch, faSync, faHistory, faPercentage, faAddressBook);

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
    }
}

export default MyApp;