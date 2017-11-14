import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS'

export const fetchUsers = () => {
    console.log('Inside Action');
    return (dispatch) => {
        const api = `https://react-ssr-api.herokuapp.com/users`
        axios.get(api)
          .then((response) => {
            dispatch({
                type: FETCH_USERS,
                payload: response.data
              });
          });
    }
}