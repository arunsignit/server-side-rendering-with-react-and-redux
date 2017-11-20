import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS'

export const fetchUsers = () => {

    return (dispatch) => {
        console.log('Action Fetch users');
        const api = `https://react-ssr-api.herokuapp.com/users`
        axios.get(api)
          .then((response) => {
            console.log('Action Fetch users...1...');
            dispatch({
                type: FETCH_USERS,
                payload: response.data
              });
          });
    }
}