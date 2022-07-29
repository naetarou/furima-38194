# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
# テーブル設計

## users テーブル

| Column             | Type    | Options                   |
| ------------------ | ------- | ------------------------- |
| nickname           | string  | null: false               |
| email              | string  | null: false, unique: true |
| encrypted_password | string  | null: false               |
| last_name          | string  | null: false               |
| first_name         | string  | null: false               |
| last_name_kana     | string  | null: false               |
| first_name_kana    | string  | null: false               |
| birthday           | integer | null: false               |



### Association

- has_many :items
- has_many :orders
- has_many :addresses



## items テーブル

| Column              | Type       | Options                       |
| ------------------- | ---------- | ----------------------------- |
| product             | string     | null: false                   |
| product_description | text       | null: false                   |
| price               | integer    | null: false                   |
| category_id         | integer    | null: false                   |
| condition_id        | integer    | null: false                   |
| bearer_id           | integer    | null: false                   |
| prefecure_id        | integer    | null: false                   |
| ship_date_id        | integer    | null: false                   |
| user_id             | references | null: false, foreign_key: true|

### Association

- belongs_to :user
- has_one :order



## orders テーブル

| Column       | Type       | Options                        |
| ------------ | ---------- | ------------------------------ |
| user_id      | references | null: false, foreign_key: true |
| items_id     | references | null: false, foreign_key: true |
| addresses_id | references | null: false, foreign_key: true |


### Association

- belongs_to :user
- belongs_to :items
- has_one :addresses




## addresses テーブル

| Column         | Type       | Options                        |
| -------------- | ---------- | ------------------------------ |
| postcord       | string     | null: false                    |
| prefefecure_id | integer    | null: false                    |
| city           | string     | null: false                    |
| block          | string     | null: false                    |
| building       | string     |                                |
| phone_number   | string     | null: false                    |
| user_id        | references | null: false, foreign_key: true |
| order_id       | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :order
