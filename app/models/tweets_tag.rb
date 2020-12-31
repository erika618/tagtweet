class TweetsTag
  include ActiveModel::Model
  attr_accessor :message, :name

  with_options presence: true do
    validates :message
    validates :name
  end

  def save
    tweet = Tweet.create(message: message)
    # tag = Tag.create(name: name)→これでは過去のデータのタグ付ができない欠点あり
    # 既存のタグが存在する場合には既存のタグを反映し、なければインスタンスを生成または保存するメソッドを使用する。
    # tag = Tag.where(name: name).first_or_initialize
    # tag.save
    tag = Tag.where(name: name).first_or_create

    TweetTagRelation.create(tweet_id: tweet.id, tag_id: tag.id)
  end
end
