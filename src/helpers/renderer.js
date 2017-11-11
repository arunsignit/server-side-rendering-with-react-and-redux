import React from 'react';
import ReactDOMServer from 'react-dom/server';
<<<<<<< HEAD
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


=======
import Home from './clients/components/Home';

export default function handleResponseRender(req, res) {
    const htmlContent = renderToString(<Home />);
    res.end(renderPage(htmlContent));
}

>>>>>>> 5c72a00444971789973fb42aa11ad27b9b013d42
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