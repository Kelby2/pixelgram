export const getPhotos = () => {
  return $.ajax({
    method: 'get',
    url: 'api/photos',
  })
}

export const getPhotosByPage = (pageNumber) => {
  return $.ajax({
    method: 'get',
    url: `api/photos?page=${pageNumber}`
  })
}

export const getUserPhotos = (user_id) => {
  return $.ajax({
    method: 'get',
    url: `api/users/${user_id}/photos`
  })
}

export const getPhoto = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/photos/${id}`,
  })
}

export const addPhoto = photo => {
  return $.ajax({
    method: 'post',
    url: 'api/photos',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: photo,
  })
};

export const deletePhoto = photo => {
  return $.ajax({
    method: 'delete',
    url: `api/photos/${photo.id}`
  })
}

export const addLike = (photo_id) => {
  return $.ajax({
    method: 'post',
    url: 'api/likes',
    data: { photo_id }
  })
}

export const deleteLike = (photo_id) => {
  return $.ajax({
    method: 'delete',
    url: `api/likes/${photo_id}`
  })
}

export const getPhotoComments = (photo_id) => {
  return $.ajax({
    method: 'get',
    url: 'api/comments',
    data: { photo_id }
  })
}

export const addComment = (comment) => {
  return $.ajax({
    method: 'post',
    url: `api/photos/${comment.photo_id}/comments`,
    data: { body: comment.commentBody }
  })
}
