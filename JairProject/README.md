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

### 1.1 User Endpoints

- `GET /user` Get all users

- `POST /user`  Register in the API

- `POST /user/login` Login process in the API


### 1.2 Professionals 

- `GET /doctor`  Get all professional 

- `POST /doctor`      Post a new doctor

- `PUT /doctor/:id`  soft Delete in the state doctor

### 1.3 Order Endpoints

- `GET /order`     View the user order by id

- `POST /order`       Post a new order

- `DELETE /order/:id`  Cancel your order


## 2. Models for MongoDB 

### 2.1 User model

```json
"user":
{
    "_id": 384720384283 (ObjectId),
    "name": "Jeremy" (String),
    "lastName": "Mathew Johnson" (String),
    "age": 45 (Integer),
    "state": true (Boolean),
    "isAdmin": false (Boolean)
}
```


### 2.2 Professional model

```json
"professional": 
{
    "_id": 1897645638 (ObjectId),
    "name": "Julius M." (String),
    "lastName": "Hibbert" (String),
    "specialism":"General" (String),
    "state": true (Boolean),
    "availability": false (Boolean)
}
```


### 2.3 Order model

```json
"order":
{
     "_id": 28923712922 (ObjectId),
     "user": {
         "_id": 384720384283
     },
     "address": "Av. Condor # 32A - 4" (String),
     "professional": {
         "_id": 1897645638
     },
     "dateOrder": "2022-01-17T03:36:48Z",
     "state":"IN_PROGRESS" (String)
}
```

