# API Doctors for our condorians

The API aims to create a web services infrastructure for the request of home doctors, in order to 
access specialists in areas such as: Psychiatry, psychology, ophthalmology, pediatrics, 
endocrinology and general medicine.

# Dependencies 
1. MongoDB 
2. Swagger 
3. JOI 
4. Express.JS
5. Bcrypt
6. JWT
7. Unit testings (at least 1 endpoint)
8. PM2 
10. EC2 
11. Extra (1 serverless)


## 1. EndPoints to use

### 1.1 ADMIN Endpoints

#### Admin Login 

The API must be able to automatically generate the ADMIN user in the database. Therefore the first access endpoint is.

`GET /user/logIn`

#### Admin get professionals and users

`GET /doctor`        Get all the professionals available

`GET /doctor/id`     Get professional by id

`GET /user`          Get all users in the API

`GET /user/id`       Get a user with id

#### Admin update & delete professionals and users

`PATCH /doctor/id`       Update the state avaible in a professional 

`DELETE /doctor/id`      Delete a professional by id

`PATCH /user/id`         Update health state user

`DELETE /user/id`       Delete a user by id

#### Admin post a professionals

`POST /doctor`      Post a new doctor 

### 1.3 User Endpoints

#### User register

`POST /user`

#### User LogIn 

`POST /user/LogIn`

#### User operations 

`GET /order/id`     View the user order by id

`POST /order`       Post a new order

`GET /doctor/specialty`     View the professionals avaible in a specialty

`PATCH /order/id`   Update a atribute in your order and confirm your order

`PUT /order/id`     Update your order

`DELETE /order/id`  Cancel your order



























