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

### Add a job offer
```
POST
/api/job-offer
Requires bearer token
```
Request
```json
{
    "title": "Searching for an artist",
    "description": "searching for an artist for my book",
    "price": 5000,
}
```
Response
```json
{
    "user_id": 1,
    "title": "Searching for an artist",
    "description": "searching for an artist for my book",
    "price": 5000,
    "status": "vacant",
}
```

### Get all job offers
```
POST
/api/job-offer
Requires bearer token
```
Response
```json
[
    {
        "user_id": 1,
        "title": "Searching for an artist",
        "description": "searching for an artist for my book",
        "price": 5000,
        "status": "vacant",
    },
    {
        "user_id": 2,
        "title": "Searching for a painter",
        "description": "searching for an artist for my art gallery",
        "price": 15000,
        "status": "vacant",
    }
]
```

### Update Job Offer
```
PUT
/api/job-offer/update/<jobId>
Requires bearer token
```
Request
```json
{
    "title": "Updated Title"
    "description": "Updated Description"
    "price": 30000,
    "status": "completed",
}
```
Response
```json
{
    "user_id": 1,
    "title": "Updated Title"
    "description": "Updated Description"
    "price": 30000,
    "status": "completed",
}
```

### Search Job Offer
```
GET
/api/job-offer/search
```
Request
```json
{
    "query": "artist",
}
```
Response
```json
[
    {
        "user_id": 1,
        "title": "Searching for an artist",
        "description": "searching for an artist for my book",
        "price": 5000,
        "status": "vacant",
    },
    {
        "user_id": 2,
        "title": "Searching for a painter",
        "description": "searching for an artist for my art gallery",
        "price": 15000,
        "status": "vacant",
    }
]
```
### Job offer created by employer
```
GET
/api/job-offer/my-offer
Requires bearer token
```
Response
```json
[
    {
        "user_id": 1,
        "title": "Searching for an artist",
        "description": "searching for an artist for my book",
        "price": 5000,
        "status": "vacant",
    },
    {
        "user_id": 1,
        "title": "Searching for a painter",
        "description": "searching for an artist for my art gallery",
        "price": 15000,
        "status": "vacant",
    }
]
```
### Get Single Job offer created by employer
```
GET
/api/job-offer/my-offer/<id>
Requires bearer token
(Note: Represents a deal request)
```
Response
```json
[
    {
        "id": 1,
        "offer_id": 1,
        "employee_id": 2,
        "dealstatus": "requested",
        "username": "prasanna",
        "email": "prasanna@example.com"
    }
]
```

### Get single job offer
```
GET
/api/job-offer/<id>
```
Response
```json
{
    "user_id": 1,
    "title": "Searching for an artist",
    "description": "searching for an artist for my book",
    "price": 5000,
    "status": "vacant",
}
```
### Apply for job offer
```
POST
/api/job-offer/apply/<id>
Requires bearer token
```
Response
```json
{
    "id": 1,
    "offer_id": 1,
    "employee_id": 2,
    "dealstatus": "request | accepted"
}
```

### Accept proposal
```
POST
/api/job-offer/accept-proposal/<id>
Requires bearer token
```
Response
```json
{
    "id": 1,
    "offer_id": 1,
    "employee_id": 2,
    "dealstatus": "accepted"
}
```
