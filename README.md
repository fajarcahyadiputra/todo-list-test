### Server Installation Setup

##### 1. Install NodeJS

Install node JS **12.18.\***, You can read the installation guide in [https://nodejs.org/en/download](https://nodejs.org/en/download/)

##### 2. create database

then create your first Database name "test_rolling_glory"

##### 3. Install Packages

Move to root project directory and run:

```bash
$ npm install
```

##### 4. Create .env File

Copy env.example to .env

```bash
$ cp env.example .env
```

Setup your database settings

```bash
NODE_ENV=development
TIME_ZONE=Asia/Jakarta

##### 5. Install Sequelize CLI

Install sequelize ORM CLI to create or run migration, seeder, etc

```bash
$ npm install --save-dev sequelize-cli
```

to see sequelize command you can type

```bash
$ npx sequelize --help
```

###### Running Migration

Run migration by typing:

```bash
$ npx sequelize-cli db:migrate
```

###### Running Seeder

Run seeder by typing:

```bash
$ npx sequelize-cli db:seed:all
```

##### 6. Install PM2 Process Manager

```bash
$ npm install pm2@latest -g
# or
$ yarn global add pm2
```

to start pm2 process run

```bash
$ pm2 start src/index.js
# Or start for development
$ pm2 start src/index.js --watch
```

##### 7. Finish

endpoint: 

Auth

```bash
# http://localhost:300/login
```

Upload

```bash
# http://localhost:3000/upload/image
```

Gift

```bash
# POST : http://localhost:300/gift
# PATCH : http://localhost:300/gift/{id}
# PUT : http://localhost:300/gift/{id}
# GET : http://localhost:300/gift/{id}
# GET : http://localhost:300/gift
# DELETE : http://localhost:300/gift
# POST : http://localhost:300/gift{id}/redeem
# POST : http://localhost:300/gift{id}/rating
```

User

```bash
# POST : http://localhost:300/user
# PATCH : http://localhost:300/user/{id}
# PUT : http://localhost:300/user/{id}
# GET : http://localhost:300/user/{id}
# GET : http://localhost:300/user
```

Now setup is finished now you can login with default user or create new user:

Login

```bash
# http://localhost:300/login
```
Request body
```bash
# email: admin@gmail.com
# password: 12345678
```
Response : 

```bash
 {
  "status": "success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZmMDRjOTk4LTRhYjUtNDM3NC1iNjkxLWI4YWJhYzA3MmFkYyIsImlhdCI6MTY2MDY3NjU1NywiZXhwIjoxNjYwNjgwMTU3fQ.kgR8mlEUmEW8UnjhkYWolEEAPPBLiVSSGoQU0JH0MmY"
    }
```
and use token for create, delete, update action. Send it with headers name "authorization"



1. Kenapa memilih nodejs : 

 - Node.js memiliki performa yang sangat baik sehingga membuat saya menjadi sangat produktif.
- Ringan untuk melakukan development dilingkungan enterprise, ditambah 400.000 lebih paket npm yang sudah tersedia.
- Front-end, back-end, dan tester menggunakan bahasa yang sama.
- Bisa melakukan pengembangan dengan produktif baik di backend maupun di frontend tanpa harus pusing karena sintaks yang berbeda. Semua menggunakan JavaScript dan cepat untuk membuat prototipe.
- Bahasa yang sama di klien dan server; JavaScript kondusif untuk melakukan functional programming; TypeScript bisa bekerja dengan baik bersama node; memiliki i/o non blocking.
- Menyenangkan, membawa angin segar dibandingkan php.
- Mudah sekali menulis kode di Node.js. Kita bahkan bisa membacanya seperti bahasa manusia.

2. kenapa memilih mysql : 

1. Portability : Mysql dapat berjalan stabil pada berbagai sistem oprasi Windows, Linux, Sun Os, Mac, unix, dan masih banyak.
2. Multiuser : Mysql dapat digunakan beberapa user dalam waktu yang bersamaan tanpa mengalami masalah.
3. Column Type : Mysql memiliki tipe kolom yang kompleks dan banyak diantara char, varchar, integer, float, text, date dan masih banyak.
4. Security : Mysql memiliki lapisan keamanan dengan tingkat level atau perijinan akses database pada tiap pada user.
5 Scalability : Dapat menangani datavase dalam skala besar dengan jumlah record lebih dari 50 juta.
6. Interface : MySQL memiliki interface yang mudah dengan aplikasi dan bahasa pemprograman, serta banyak client dan tools yang dapat digunakan didalam memanej database.
7. Struktur Tabel : MySQL memiliki struktur yang lebih fleksibel dapat menangani Alter Table.

3. schema DB yang di buat : 

### User Table

| Field Name         | Type   | Key | Description                         |
| ------------------ | ------ | :-: | ----------------------------------- |
| id                 | string | PK  |                                     |
| name               | string |     |                                     |
| email              | string |     |                                     |
| password           | string |     |                                     |

### Gift Table

| Field Name         | Type   | Key | Description                         |
| ------------------ | ------ | :-: | ----------------------------------- |
| id                 | string | PK  |                                     |
| name               | string |     |                                     |
| slug               | string |     |    unique                           |
| stock              | number |     |                                     |
| point              | number |     |                                     |
| averageRating      | number |     |                                     |
| ratingStars        | number |     |                                     |
| totalRating        | number |     |                                     |
| image              | string |     |                                     |

### User Gift Table

| Field Name         | Type   | Key | Description                         |
| ------------------ | ------ | :-: | ----------------------------------- |
| id                 | string | PK  |                                     |
| user_id            | string |     |                                     |
| gift_id            | string |     |                                     |

3. postman collection : 

https://www.getpostman.com/collections/9324e1e710d6b0e029dc




