import { FETCH_USERS } from '../clients/actions'

export default (state = [],action) => {

    switch (action.type) {
        case FETCH_USERS:
          console.log('Inside fetch users');
          return action.payload;
        default:
         return state;
    }
}