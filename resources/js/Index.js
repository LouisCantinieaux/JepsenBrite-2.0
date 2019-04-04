import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from './layouts/Layout';
import { BrowserRouter} from 'react-router-dom';

import Provider from './store/store'
import ScrollToTop from './layouts/ScrollToTop'

ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <ScrollToTop>
                <Layout />
            </ScrollToTop>
        </BrowserRouter>
    </Provider>, document.getElementById('app'));