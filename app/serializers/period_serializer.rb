class PeriodSerializer < ActiveModel::Serializer
  attributes :id, :name, :era, :image_src
  has_many :composers
end
