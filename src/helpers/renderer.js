import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Home from './clients/components/Home';

export default function handleResponseRender(req, res) {
    const htmlContent = renderToString(<Home />);
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