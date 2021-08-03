class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :playlists, through: :playlist_compositions
end
 