import express from 'express';
import handleResponseRender from './helpers/renderer'

const app = express();

app.use(express.static('public'));
app.all('/*', handleResponseRender);

app.listen(3000,() => {
    console.log('Listening on port 3000');
});

