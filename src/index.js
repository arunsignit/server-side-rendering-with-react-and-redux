
import {createStore,applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers/index'
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './clients/Routes';
import renderer from './helpers/renderer'

const app = express();

app.use(express.static('public'));
app.get('*',(req,res) => {
  
 const store = createStore(reducers,{},applyMiddleware(thunk));

const promises = matchRoutes(Routes,req.path).map(({ route }) => {
    console.log('inside...',route.loadData);
    return route.loadData ? route.loadData(store) : null;
});
    
    console.log(promises);

        res.send(renderer(req,store))
  

   
});


app.listen(3000,() => {
    console.log('Listening on port 3000');
});

