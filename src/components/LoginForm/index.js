import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginContainer,
  FormCard,
  LoginWebsiteLogoimg,
  InputContainer,
  InputLabel,
  InputField,
  LoginButton,
  ErrorMsg,
  ShowPasswordLabel,
  CheckBoxName,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    showPassword: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  handleCheckboxChange = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const {isDark} = this.context

    return (
      <>
        <InputLabel htmlFor="password" color={!isDark ? '#f4f4f4' : '#606060'}>
          PASSWORD
        </InputLabel>
        <InputField
          type={showPassword ? 'text' : 'password'}
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
          bgColor={!isDark ? '#000000' : '#ffffff'}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    const {isDark} = this.context

    return (
      <>
        <InputLabel
          className="input-label"
          color={!isDark ? '#f4f4f4' : '#606060'}
          htmlFor="username"
        >
          USERNAME
        </InputLabel>
        <InputField
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
          bgColor={!isDark ? '#000000' : '#ffffff'}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const {isDark} = this.context

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginContainer bgColor={!isDark ? '#313131' : '#ffffff'}>
        <FormCard
          bgColor={!isDark ? '#000000' : '#ffffff'}
          onSubmit={this.submitForm}
        >
          <LoginWebsiteLogoimg
            src={
              !isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="website logo"
          />
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <ShowPasswordLabel>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={this.handleCheckboxChange}
            />
            <CheckBoxName color={!isDark ? '#f4f4f4' : '#000000'}>
              Show Password
            </CheckBoxName>
          </ShowPasswordLabel>
          <LoginButton type="submit" className="login-button">
            Login
          </LoginButton>
          {showSubmitError && (
            <ErrorMsg className="error-message">*{errorMsg}</ErrorMsg>
          )}
        </FormCard>
      </LoginContainer>
    )
  }
}

LoginForm.contextType = ThemeContext

export default LoginForm
