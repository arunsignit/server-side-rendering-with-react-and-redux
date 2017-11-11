import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../clients/Routes';


export default function handleResponseRender(req, res) {
    const htmlContent = ReactDOMServer.renderToString(
        <StaticRouter location={req.path} context={{}}>
         <Routes />
        </StaticRouter>

    );
    res.end(renderPage(htmlContent));
}


function renderPage(htmlcontent){
    return `
	<!DOCTYPE html>
	<html>
	<head>
    <head></head>
    <body>
        <div id="root">${htmlcontent}</div>
        <script src="bundle.js"></script>
    </body>
    </html>`;
}