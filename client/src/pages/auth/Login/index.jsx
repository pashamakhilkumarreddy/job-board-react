import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {combineReducers} from 'redux';
import { register } from '../../../store/actions/Authentication';

class Login extends Component {
  state = {
    email: '',
    password: '',
    rememberMe: true,
  }

  handleOnChange = (e) => {
    try {
    } catch(err) {
      console.error(err);
    }
  }

  handleOnSubmit = (e) => {
    try {
      e.preventDefault();
    } catch(err) {
      console.error(err);
    }
  }

  render() {
    const {email, password, rememberMe} = this.state;
    return (
      <form>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-input"
          placeholder="username@domain.com" value={email} required />
        </div>
        <div className="form-group">
          <label htmlFor="Login-password" className="form-label">Password</label>
          <input type="password" id="Login-password" className="form-input"
          placeholder="........" value={password} required />
        </div>
        <div className="form-group">
          <label htmlFor="terms-and-conditions" className="form-checkbox"></label>
          <input type="checkbox" id="terms-and-conditions" value={rememberMe} checked={true} />
          <i className="form-icon"></i> Remember me
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {

}

Login.propTypes = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);