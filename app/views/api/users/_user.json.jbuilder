json.extract! user, :id, :username, :fullname, :email, :bio
json.avatarUrl asset_path(user.avatar.url)
json.photoIds user.photos.map(&:id)
json.likeIds user.likes.map(&:id)
