import {SUCCESS_ALERT, INFO_ALERT, WARNING_ALERT, ERROR_ALERT} from '../constants/Alerts';

export const displaySuccessMessage = (message = '') => {
  return {
    type: SUCCESS_ALERT,
    payload: {
      message,
    }
  }
}

export const displayInfoMessage = (message = '') => {
  return {
    type: INFO_ALERT,
    payload: {
      message,
    }
  }
}

export const displayWarningMessage = (message = '') => {
  return {
    type: WARNING_ALERT,
    payload: {
      message,
    }
  }
}

export const displayErrorMessage = (message = '') => {
  return {
    type: ERROR_ALERT,
    payload: {
      message,
    }
  }
}