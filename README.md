# README

# アプリ名
tagtweet

<br>

# URL
Herokuによるデプロイ
https://tagtweet-20201231.herokuapp.com/

<br>

# 説明

ツイートに対するタグ付機能の他、インクリメンタルサーチと呼ばれるデータベースを参照して入力している文字列と一致するタグの候補をリアルタイムに画面上へ表示することができます。

<br>

# テーブル設計

## tweets テーブル

| Column   | Type    | Options     |
| :------- | :-----  | :---------- |
| message  | string  | null: false |

### Association

- has_many :tweet_tag_relations
- has_many :tags, through: :tweet_tag_relations

<br>

## tags テーブル

| Column   | Type       | Options                       |
| :------- | :--------- | :---------------------------- |
| name     | string     | null: false, uniqueness: true |


### Association

- has_many :tweet_tag_relations
- has_many :tweets, through: :tweet_tag_relations

<br>

## tweet_tag_relations テーブル

| Column   | Type       | Options           |
| :------- | :--------- | :---------------- |
| tweet_id | references | foreign_key: true |
| tag_id   | references | foreign_key: true |


### Association

- belongs_to :tweet
- belongs_to :tag

<br>
<br>

# 使用しているバージョン等

- ruby 2.6.5
- Rails 6.0.3.4
- MySQL

<br>

# clone
```
% git clone https://github.com/erika618/tagtweet.git
% cd tagtweet
% bundle install
% yarn install
% rails db:create
% rails db:migrate
```

<br>

# その他使用しているgem・使うコマンド
```
<!-- brakeman（脆弱性に繋がるコードがないか確認するため ※全てのファイル・全ての警告オプション） -->
% bundle exec brakeman -A -w1

<!-- rails_best_practices（読みやすいコードか確認するため） -->
% rails_best_practices .

<!-- rubocop（インデントを整えるため） -->
% bundle exec rubocop -a

```
