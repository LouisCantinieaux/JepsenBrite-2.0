import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from './layouts/Layout';
import { BrowserRouter} from 'react-router-dom';

import Provider from './store/store'

ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </Provider>, document.getElementById('app'));