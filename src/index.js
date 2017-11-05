const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./clients/components/Home').default;
const app = express();


app.get('/', (req,res) => {
 const contenent = renderToString(<Home />);
  res.send(contenent);
});

app.listen(3000,() => {
    console.log('Listening on port 3000');
});

