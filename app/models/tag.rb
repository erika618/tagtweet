class Tag < ApplicationRecord
  has_many :tweet_tag_relations
  has_many :tweets, through: :tweet_tag_relations
  # Formオブジェクトであっても、一意性の制約は対象のモデル内で設ける
  validates :name, uniqueness: true
end
