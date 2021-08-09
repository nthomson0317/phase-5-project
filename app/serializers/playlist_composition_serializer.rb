class PlaylistCompositionSerializer < ActiveModel::Serializer
  attributes :id, :composition_id, :playlist_id
  belongs_to :composition



end
