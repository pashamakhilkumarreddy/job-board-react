import {
  REGISTER,
  LOGIN,
  LOGOUT
} from '../constants/Authentication';
import {
  displaySuccessMessage,
  displayErrorMessage
} from './Alerts';
import AuthenticationService from '../../services/AuthenticationService';

const _next = () => {}

export const register = () => {
  return function (dispatch) {
    return AuthenticationService.register(payload)
    .then((res) => {
      if (resp.success) {
        dispatch({
          type: REGISTER,
          payload: res?.data?.data,
        })
      }
    }).catch(err => {
      console.error(err);
      return dispatch(displayErrorMessage(err));
    })
  }
}

export const login = () => {
  return function (dispatch) {
    return AuthenticationService.login(payload)
    .then((res) => {
      if (resp.success) {
        dispatch({
          type: LOGIN,
          payload: res?.data?.data,
        })
      }
    }).catch(err => {
      console.error(err);
      return dispatch(displayErrorMessage(err));
    })
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
    payload: {},
  }
}

export default {
  register, 
  login,
  logout,
}