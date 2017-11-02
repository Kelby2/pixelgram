import React from 'react';
import { Link } from 'react-router-dom';
import PhotoGridItem from '../photos/photo_grid_item';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      photos: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params !== nextProps.match.params) {
      this.props.clearAllPhotos();
      const user = this.props.getUser(nextProps.match.params.id);
      const photos = this.props.getUserPhotos(nextProps.match.params.id);
      this.setState({
        user,
        photos
      })
    }
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
    this.props.getUserPhotos(this.props.match.params.id);
  }

  render () {
    const user = this.props.user

    if (!(user && user.photoIds)) {
      return null;
    } else {
      debugger
      return (
        <main className='user-profile-container'>
          <div className='user-profile'>

            <article className='user-profile-header'>

              <div className='user-avatar-container'>
                <div className='user-avatar'>
                  <img className='avatar' src={user.avatarUrl} />
                </div>
              </div>

              <div className='user-info-container'>

                <div className='info-1'>
                  <span className='user-name'>{user.username}</span>
                  <button className='toggleFollowButton'>Follow</button>
                  <div className="fa fa-gear fa-lg edit-dropdown"></div>
                </div>

                <div className='info-2'>
                  <span className='user-stats'>
                    {user.photoIds.length} posts
                    24 followers
                    13 following
                  </span>
                </div>

                <div className='info-3'>
                  <span className='user-bio'>
                    <div className='user-full-name'>{user.fullname}</div>
                    <div> this will be my bio </div>
                  </span>
                </div>

              </div>

            </article>

            <article className='user-photos-container'>
              <ul className='user-photos'>
                {
                  this.props.photos.map(photo => {
                    debugger
                    return(
                      <PhotoGridItem
                        key={ photo.id }
                        photo={ photo }/>
                    )
                  })
                }
              </ul>
            </article>

          </div>

        </main>
      )
    };
  }
}

export default UserProfile;
