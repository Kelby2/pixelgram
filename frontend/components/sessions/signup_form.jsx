import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fullname: "",
      username: "",
      password: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  renderErrors() {
    return (
      this.props.errors.session.map((error, idx) => {
        if (error === "Fullname can't be blank") {
          error = "Full name can't be blank"
        };


        return <li
          className='errorMessages'
          key={`${idx}`}>
          {error}
        </li>
      })
    )
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.signup(user);
  }

  handleInputChange(formField) {
    return (e) => {
      this.setState({ [formField]: e.target.value });
    };
  }

  toggleForm(event) {
    event.preventDefault();
    this.props.clearErrors();
    this.setState({ username: "",
                    password: "",
                    fullname: "",
                    email: ""})
  }

  render () {
    const usernameInput = (
      <div>
        <input
          className='session-form-input'
          type='text'
          value={this.state.username}
          onChange={this.handleInputChange('username')}
          placeholder='Username'>
        </input>
        <br />
      </div>
    )

    const passwordInput = (
      <div>
        <input
          className='session-form-input'
          type='password'
          value={this.state.password}
          onChange={this.handleInputChange('password')}
          placeholder='Password'>
        </input>
        <br />
      </div>
    )

    const signUpWelcomeText = (
      <span className='entry-form-text'>
        Sign up and see amazing photos from your friends!
      </span>
    )

    const signUpAgreementText = (
      <span className='entry-form-text'>
        By signing up, you agree to our <Link className='policy-terms'
        to={"/"}>Terms & Privacy Policy</Link>
      </span>
    )

    const emailInput = (
      <div>
        <input
          className='session-form-input'
          type='text'
          value={this.state.email}
          onChange={this.handleInputChange('email')}
          placeholder='Email'>
        </input>
        <br />
      </div>
    )

    const fullNameInput = (
      <div>
        <input
          className='session-form-input'
          type='text'
          value={this.state.fullname}
          onChange={this.handleInputChange('fullname')}
          placeholder='Full name'>
        </input>
        <br />
      </div>
    )

    return (
      <div className='main-form'>
        <h2 className='title'>pxlgram</h2>
        <br />
        {signUpWelcomeText}
        <form onSubmit={this.handleFormSubmit} className='entry-form'>
          {fullNameInput}
          {emailInput}
          {usernameInput}
          {passwordInput}
          <input
            className='submitButton'
            type='submit'
            value='Sign Up' />
        </form>
        <ul>
          {this.renderErrors()}
          <br />
        </ul>
        {signUpAgreementText}
      </div>
    );
  }
}

export default SignUpForm;