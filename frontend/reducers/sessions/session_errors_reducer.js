import { RECEIVE_SESSION_ERRORS,
        RECEIVE_CURRENT_USER,
        CLEAR_SESSION_ERRORS
      } from '../../actions/session_actions';

const SessionErrorsReducer = (initialState = [], action) => {
  Object.freeze(initialState);
  let newState;

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
    case CLEAR_SESSION_ERRORS:
      return [];
    default:
      return initialState;
  }
};

export default SessionErrorsReducer;
