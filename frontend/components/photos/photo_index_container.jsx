import { connect } from 'react-redux';
import { getPhotos, clearAllPhotos } from '../../actions/photo_actions';
import { getUsers, clearAllUsers } from '../../actions/user_actions';
import { getComments } from '../../actions/comment_actions'
import PhotoIndex from './photo_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return ({
    photos: Object.keys(state.entities.photos)
    .map(id => state.entities.photos[id]).reverse(),

    users: Object.keys(state.entities.users)
    .map(id => state.entities.users[id]),

    comments: Object.keys(state.entities.comments)
    .map(id => state.entities.comments[id])
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getComments: () => dispatch(getComments()),
    getPhotos: () => dispatch(getPhotos()),
    getUsers: () => dispatch(getUsers()),
    addLike: (photo_id) => dispatch(addLike(photo_id)),
    deleteLike: () => dispatch(deleteLike(id))
  });
};

export default connect(mapStateToProps,
                        mapDispatchToProps)(PhotoIndex)
