import Api from './Api';

export default {
  getJobs() {
    return Api().get('/jobs')
  },
  login({email, password}) {
    return Api().post('/login', {
      email,
      password
    })
  }
}