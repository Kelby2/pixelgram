import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO_PAGE = 'RECEIVE_PHOTO_PAGE';
export const RECEIVE_PHOTO_GRID = 'RECEIVE_PHOTO_GRID';
export const CLEAR_PHOTOS = 'CLEAR_PHOTOS';
export const RECEIVE_USER_PHOTOS = 'RECEIVE_USER_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';
export const CLEAR_PHOTO_ERRORS = 'CLEAR_PHOTO_ERRORS';

//photos, photo, photoId is moved to the reducer under action
const fetchPhotos = photos => {
  return ({
    type: RECEIVE_ALL_PHOTOS,
    photos
  });
};

const fetchPhotoPage = photos => {
  return ({
    type: RECEIVE_PHOTO_PAGE,
    photos,
  });
};

const fetchUserPhotos = photos => {
  return ({
    type: RECEIVE_USER_PHOTOS,
    photos,
  });
};

const fetchPhotoGrid = photos => {
  return ({
    type: RECEIVE_PHOTO_GRID,
    photos,
  });
};

const fetchPhoto = photo => {
  return ({
    type: RECEIVE_PHOTO,
    photo
  });
};

const removePhoto = photoId => {
  return ({
    type: REMOVE_PHOTO,
    photoId,
  });
};

const receivePhotoErrors = errors => {
  return ({
    type: RECEIVE_PHOTO_ERRORS,
    errors: errors.responseJSON
  });
};

const clearPhotos = () => {
  return ({
    type: CLEAR_PHOTOS,
  });
};

const removePhotoErrors = () => {
  return ({
    type: CLEAR_PHOTO_ERRORS,
    errors: [],
  });
};

export const getPhotosPage = page => dispatch => {
  return PhotoApiUtil.getPhotosPage(page)
              .then(photos => dispatch(fetchPhotoPage(photos)));
};

export const resetPhotos = () => dispatch => {
  return dispatch(clearPhotos());
};

export const getPhotosGrid = page => dispatch => {
  return PhotoApiUtil.getPhotosGrid(page)
              .then(photos => dispatch(fetchPhotoGrid(photos)));
};

export const getUserPhotos = username => dispatch => {
  return PhotoApiUtil.getUserPhotos(username)
              .then(photos => dispatch(fetchUserPhotos(photos)));
};

export const getPhotos = () => dispatch => {
  return PhotoApiUtil.getPhotos()
              .then(photos => dispatch(fetchPhotos(photos)));
};

export const getPhoto = photoId => dispatch => {
  return PhotoApiUtil.getPhoto(photoId)
              .then(photo => dispatch(fetchPhoto(photo)));
};

export const addPhoto = photo => dispatch => {
  return PhotoApiUtil.addPhoto(photo)
    .then(photo => dispatch(fetchPhoto(photo)),
          errors => dispatch(receivePhotoErrors(errors))
        );
};

export const deletePhoto = photo => dispatch => {
  return PhotoApiUtil.deletePhoto(photo)
              .then(photo => dispatch(removePhoto(photo)));
};

export const clearPhotoErrors = () => dispatch => {
  return dispatch(removePhotoErrors());
};
