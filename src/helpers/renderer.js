import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import Routes from '../clients/Routes';
import createStore from '../store/configureStore';

export default function handleResponseRender(req, res) {
    
    const store = createStore();

    const htmlContent = ReactDOMServer.renderToString(
        <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
         <Routes />
        </StaticRouter>
        </Provider>
      
    );
    res.end(renderPage(htmlContent));
}

function renderPage(htmlcontent){

    return `
	<!DOCTYPE html>
	<html>
	<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ADP Marketplace Developer Portal</title>
    </head>
    <body>
        <div id="root">${htmlcontent}</div>
        <script src="bundle.js"></script>
    </body>
    </html>`;
}