import Api from './Api';

export default {
  getUserProfile() {
    return Api().get('/profile')
  },
  updateUserProfile(payload) {
    return Api().put('/profile', {
      ...payload,
    })
  }
}