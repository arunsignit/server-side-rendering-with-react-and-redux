import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes  } from 'react-router-config';
import Routes from '../clients/Routes';


export default (req,store) => {
    
        const htmlContent = ReactDOMServer.renderToString(
            <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
             <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
            </Provider>
        )
        
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
            <div id="root">${htmlContent}</div>
            <script src="bundle.js"></script>
        </body>
        </html>`;
};

