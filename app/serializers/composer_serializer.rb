class ComposerSerializer < ActiveModel::Serializer
  attributes :id, :name, :birth, :death, :portrait
  has_many :compositions

end
