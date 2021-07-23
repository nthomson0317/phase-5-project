class CompositionSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :composer_id, :year_composed, :year_performed, :spotify_id
  has_one :composer
end
