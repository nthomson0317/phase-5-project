class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :playlist_compositions
end
