class Composer < ApplicationRecord
  belongs_to :period
  has_many :compositions
end
