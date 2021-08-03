class PlaylistComposition < ApplicationRecord
  belongs_to :playlist
  belongs_to :composition
end
