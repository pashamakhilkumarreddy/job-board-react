import {
  FETCH_PROFILE,
  UPDATE_PROFILE,
  DELETE_PROFILE
} from '../constants/Profile';
import {
  displaySuccessMessage,
  displayErrorMessage,
} from './Alerts'
import ProfileService from '../../services/ProfileService';

export const fetchUserProfile = () => {
  return function (dispatch) {
    return ProfileService.getUserProfile()
      .then(resp => {
        if (resp.success) {}
      }).catch(err => {
        console.error(err);
        return displayErrorMessage(err);
      })
  }
}

export const updateUserProfile = () => {
  return function (dispatch) {
    return ProfileService.updateUserProfile(payload)
      .then(resp => {
        if (resp.success) {

        }
      }).catch(err => {
        console.error(err);
        return displayErrorMessage(err);
      })
  }
}

export const deleteUserProfile = () => {

}