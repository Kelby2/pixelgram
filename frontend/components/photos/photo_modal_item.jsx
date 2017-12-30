import React from 'react';
import { Link } from 'react-router-dom';
import LikeContainer from '../likes/like_container';
import CommentForm from '../comments/comment_form';
import TimeStamp from '../photos/photo_time_stamp';
import CommentIndexContainer from '../comments/comment_index_container';

const focusComment = id => {
  document.getElementById(id).focus();
}

const PhotoModalItem = ( { photo } ) => {
  
  return (
    <main id="modal-container">
      <aside id="modal-photo-container">
        <img id="modal-photo" src={ photo.imageUrl }></img>
      </aside>

      <aside id="modal-photo-information">

        <article className='photo-author-info'>
          <div className='stream-avatar-container'>
            <Link to={`/${photo.author_name}`}>
              <img className='stream-avatar' src={photo.author_avatar} />
            </Link>
          </div>

          <div className='author-username'>
            <Link to={`/${photo.author_name}`}>
               <div className='stream-username'>
                 {photo.author_name}
              </div>
            </Link>
          </div>
        </article>

        <CommentIndexContainer photoId={photo.id} />

        <div className='icon-container'>
          <LikeContainer photo_id={photo.id} />
          <div
            className='fa fa-comment-o fa-lg comments-icon'
            onClick={ () => focusComment(photo.id) }>
          </div>
        </div>

        <div className='like-count'>
          { photo.likers.length} {( photo.likers.length === 1) ? 'like' : 'likes'}
        </div>

        <TimeStamp photoCreationTime={photo.created_at}/>
        <CommentForm id={photo.id} photo={ photo }/>

      </aside>
    </main>
  )
}

export default PhotoModalItem;