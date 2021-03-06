import React from 'react';
import { Link } from 'react-router-dom';

const githubURL = 'https://github.com/Kelby2/pxlgram';
const linkedInURL = 'https://www.linkedin.com/in/kelbylu/';

class UserInfo extends React.Component {

  state = { userProfileLoaded: false }

  componentDidMount() {
    this.props.getUser(this.props.username)
    .then(() => this.setState({ userProfileLoaded: true }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      this.setState({ userProfileLoaded: false });
      this.props.getUser(this.props.username)
      .then(() => this.setState({ userProfileLoaded: true }));
    }
  }

  renderEditProfileButton() {
    return (
      <Link style={{ marginRight: '20px' }} to={`/${this.props.username}/edit`}>
        <button
          className='edit-profile-button'>
          Edit Profile
        </button>
      </Link>
    );
  }

  onFollowPress() {
    const {
      currentUserFollows,
      username,
      unfollowUser,
      followUser } = this.props;

    if (currentUserFollows) {
      unfollowUser(username);
    } else {
      followUser(username);
    }
  }

  renderFollowerButton() {
    const { currentUserFollows } = this.props;

    return (
      <button
        onClick={this.onFollowPress.bind(this)}
        className={currentUserFollows ? 'unfollow-btn' : 'follow-btn'}>
        {currentUserFollows ? 'Following' : 'Follow'}
      </button>
    );
  }

  renderLogOutButton() {
    return (
      <div
        onClick={this.props.onLogoutClick}
        className="fa fa-sign-out fa-2x">
      </div>
    );
  }

  renderExternalLinks() {
    return (
      <nav className='profile-btns'>
        <a href={githubURL} className='fa fa-github-square fa-2x' />
        <a href={linkedInURL} className='fa fa-linkedin-square fa-2x' />
      </nav>
    );
  }

  render() {
    const { user, isCurrentUser } = this.props;

    return (
      <div>
        {this.state.userProfileLoaded && user.photoIds &&
          <article className='user-profile-header'>
            <div className='user-avatar-container'>
              <div className='user-avatar'>
                <img className='avatar' src={user.avatarUrl} />
              </div>
            </div>

            <div className='user-info-container'>
              <div className='info-section-1'>
                <span className='user-name'>{user.username}</span>
                {isCurrentUser ?
                  this.renderEditProfileButton() : this.renderFollowerButton()}
                {user.username === 'kelbylu' && this.renderExternalLinks()}
                {isCurrentUser && this.renderLogOutButton()}
              </div>

              <div className='info-section-2'>
                <span className='user-stats'>
                  <div className='stat photo-count'>
                    {user.photoIds.length} {user.photoIds.length === 1 ? 'post' : 'posts'}
                  </div>
                  <div className='stat follower-count'>
                    {user.followers.length} {user.followers.length === 1 ? 'follower' : 'followers'}
                  </div>
                  <div className='stat following-count'>
                    {user.followings.length} following
                  </div>
                </span>
              </div>

              <div className='info-section-3'>
                <div className='user-bio'>
                  <p className='user-full-name'>{user.fullname}</p>
                  <p>{user.bio}</p>
                </div>
              </div>
            </div>
          </article>
        }
      </div>
    );
  }
}

export default UserInfo;
