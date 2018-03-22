// import { LOGIN } from './../constants/actionTypes';
import initialState from './initialState';
import reducersGenerate from './reducerGenerator';

const LOGIN = 'LOGIN';

export default reducersGenerate(LOGIN, initialState.auth, {
  'LOGIN_PENDING': (state) => {
    return Object.assign({}, state, {
      isFetching: true,
      isLogged: false
    });
  },
  'LOGIN_FULFILLED': (state, action) => {
    return Object.assign({}, state, {
      isFetching: false,
      isLogged: true,
      user: action.payload
    });
  },
  'LOGIN_REJECTED': (state, action) => {
    return Object.assign({}, state, {
      isFetching: false,
      isLogged: false
    });
  },
  'LOGOUT': (state, action) => {
    return Object.assign({}, state, {
      isFetching: false,
      isLogged: false
    })
  }
});
