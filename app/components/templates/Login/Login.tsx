import React, { Component } from 'react';
import styles from './Login.css';
import AppLogo from '../../atoms/AppLogo';
import Input from '../../atoms/Input';

import imgEmail from '../../../../resources/img/icons/icon-email.svg';
import imgLock from '../../../../resources/img/icons/icon-lock.svg';
import CheckBox from '../../atoms/CheckBox';
import Button from '../../atoms/Button';

type LoginProps = {
  login: any
}

type LoginState = {
  email: string,
  password: string,
  isRemember: boolean
}

class Login extends Component<LoginProps, LoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: 'test@com',
      password: 'test',
      isRemember: true
    }
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.handleCheckRemember = this.handleCheckRemember.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  handleChangeInput = (e: any) => {
		this.setState({[e.target.name]: e.target.value});
  };
  handleCheckRemember = (e: any) => {
    this.setState({isRemember: e.target.checked});
  }
  handleLogin = () => {
    const {login} = this.props
    const {email, password} = this.state
    if (typeof login === "function")
      login(email, password)
  }
  render() {
    return (
      <div className={styles.screenCurtain}>
        <div className={styles.popupWrapper}>
          <div className={styles.loginWrapper}>
            <div className={styles.loginHeader}>
              <div className={styles.logoWrapper}>
                <AppLogo/>
              </div>
            </div>
            <div className={styles.loginWelcome}>
              Welcome
            </div>
            <div className={styles.loginInputWrapper}>
              <Input 
                type="email" 
                placeholder="E-mail Address" 
                img={imgEmail} 
                autoFocus={true}
                name="email"
                onChange={this.handleChangeInput}
                value={this.state.email}
              />
            </div>
            <div className={styles.loginInputWrapper}>
              <Input 
                type="password" 
                placeholder="Password" 
                img={imgLock} 
                autoFocus={true}
                name="password"
                onChange={this.handleChangeInput}
                value={this.state.password}
              />
            </div>
            <div className={styles.loginMetaWrapper}>
              <CheckBox
                placeholder="Remember me"
                name="isRemember"
                onChange={this.handleCheckRemember}
                defaultChecked={this.state.isRemember}
              />
              <div className={styles.loginForgotPassword}>
                Forgot Password?
              </div>
            </div>
            <div className={styles.loginButtonWrapper}>
              <Button onClick={this.handleLogin}>Login</Button>
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}

export default Login