import Api from './Api';

export default {
  register({email, password}) {
    return Api().post('/register', {
      email,
      password
    })
  },
  login({email, password}) {
    return Api().post('/login', {
      email,
      password
    })
  }
}