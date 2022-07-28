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

| Column             | Type    | Options     |
| ------------------ | ------- | ----------- |
| nickname           | string  | null: false |
| email              | string  | null: false |
| encrypted_password | string  | null: false |
| last_name          | string  | null: false |
| first_name         | string  | null: false |
| last_name_kana     | string  | null: false |
| first_name_kana    | string  | null: false |
| birthday           |         |             |

### user_active_hash
| birthday     |
#### Association

- has_many :items
- has_many :orders



## items テーブル

| Column              | Type       | Options                       |
| ------------------- | ---------- | ----------------------------- |
| product             | string     | null: false                   |
| product_description | text       | null: false                   |
| price               | integer    | null: false                   |
| user_id             | references | null: false, foreign_key: true|
| category            |            |                               |
| product_status      |            |                               |
| shopping_fee_bearer |            |                               |
| shopping_area       |            |                               |
| shopping_days       |            |                               |


### items_active_hash
| category            |
| product_status      |
| shopping_fee_bearer |
| shopping_area       |
| shopping_days       |

#### Association

- belongs_to :user
- has_one :order




## orders テーブル

| Column       | Type       | Options                        |
| ------------ | ---------- | ------------------------------ |
| postcord     | integer    | null: false                    |
| city         | string     | null: false                    |
| block        | string     | null: false                    |
| building     | string     |                                |
| phone_number | integer    | null: false                    |
| user_id      | references | null: false, foreign_key: true |
| prefefecure  |            |                                |

### orders_active_hash
| prefefecure  |

#### Association

- belongs_to :user
- belongs_to :items