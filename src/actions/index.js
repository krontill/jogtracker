import {SET_AUTHORIZATION_TOKEN} from '../constants';

export function setAuthorizationToken(authorizationToken) {
  return {
    type: SET_AUTHORIZATION_TOKEN,
    payload: {authorizationToken}
  }
}