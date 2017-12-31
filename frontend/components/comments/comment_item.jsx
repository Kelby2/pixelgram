import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();

  }

  render() {

    let deleteCommentButton;

    if (this.props.comment.author_name === this.props.currentUser) {
      deleteCommentButton = (
        <div
          className="fa fa-times"
          id="delete-comment-button"
          onClick={ this.handleDelete }>
        </div>
      )
    }
    return (
      <li className='comment'>
        <Link to={`/${this.props.comment.author_name}`}>
          <span className='comment-author'>{this.props.comment.author_name}</span>
        </Link>
        { deleteCommentButton }
        <span className='comment-body'>{this.props.comment.body}</span>
      </li>
    )
  }
}


const mapStateToProps = state => {
  const currentUser = state.session.currentUser.username;

  return {
    currentUser,
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    deleteComment: id => dispatch(deleteComment(id)),
  })
}
export default connect(mapStateToProps, mapDispatchToProps)
                        (CommentItem);
