import {SET_AUTHORIZATION_TOKEN} from '../constants';

const initialState = {};

export default (auth = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_AUTHORIZATION_TOKEN:
      return {...auth, authorizationToken: payload.authorizationToken};
    default:
      return auth;
  }

}
