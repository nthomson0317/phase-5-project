class PlaylistCompositionSerializer < ActiveModel::Serializer
  attributes :composition_id, :playlist_id
  belongs_to :composition



end
