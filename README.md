# Users

### Register a user
```
POST
/api/users/register
```
Request
```json
{
    "username": "Samip Luitel",
    "email": "samip@gmail.com",
    "password": "secret123",
    "usertype": "employee | employer"
}
```
Response
```json
{
    "username": "Samip Luitel",
    "email": "samip@gmail.com",
    "usertype": "employee | employer"
}
```

### Login a user
```
POST
/api/users/login
```
Request
```json
{
    "email": "samip@gmail.com",
    "password": "secret123",
}
```
Response
```json
{
    "email": "samip@gmail.com",
    "username": "Samip Luitel",
    "token": "<jwt-token>",
    "userType": "employee | employer"
}
```

### Update user profile
```
PUT
/api/users/update-profile
Requires bearer token
```
Request
```json
{
    "username": "Sameep Luitel",
    "bio": "Updated bio"
}
```
Response
```json
{
    "username": "Sameep Luitel",
    "email": "samip@gmail.com",
    "bio": "Updated bio"
    "userType": "employee | employer"
}
```

### Get user profile
```
PUT
/api/users/<id>
```
Response
```json
{
    "id": 1,
    "username": "Sameep Luitel",
    "email": "samip@gmail.com",
    "bio": "Updated bio"
    "userType": "employee | employer"
}
```

# Job Offer
