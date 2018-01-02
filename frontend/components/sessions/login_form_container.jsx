import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const sessionsErrors = state.errors.sessionsErrors;

  return ({
    sessionsErrors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    login: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  })
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm));
