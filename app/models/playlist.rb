class Playlist < ApplicationRecord
  belongs_to :user
  has_many :playlist_compositions
end
