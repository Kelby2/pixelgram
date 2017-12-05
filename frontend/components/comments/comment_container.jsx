import { connect } from 'react-redux';
import { getPhoto } from '../../actions/photo_actions';
import { getComments, addComment, getPhotoComments } from '../../actions/comment_actions'
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.photo_id]
  const comments = Object.values(state.entities.comments).filter((comment) => {
    return (comment.photo_id === parseInt(ownProps.photo_id))
  })
  const users = state.entities.users
  return {
    photo,
    users,
    comments,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addComment: (comment) => dispatch(addComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    getPhoto: (id) => dispatch(getPhoto(id)),
    getPhotoComments: (photo_id) => dispatch(getPhotoComments(photo_id))
  })
}

export default connect(mapStateToProps,
                        mapDispatchToProps)(CommentIndex)
