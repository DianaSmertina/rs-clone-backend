# rs-clone-backend
Api for rs-clone

# How to use
The server isn't deployed yet. You can use it local

1. Clone this repo
2. `cd backend`
3. Install dependencies with `npm install`
4. Start server `npm run start`

Server will run in port 5000.  
You can test requests with [Postman](https://www.postman.com/downloads/?utm_source=postman-home)

# Requests

## Create new user (Sign Up)
Post request on http://localhost:5000/api/user with body `{"username": "...", "password": "..."}` and headers: `'Content-type': 'application/json'`  
If user is successfully created response is ok.  
In case if username is taken it will be 400 error with message: 'This username is already taken'

## Sign in
Post request on http://localhost:5000/api/sign-in with body `{"username": "...", "password": "..."}` and headers: `'Content-type': 'application/json'`  
If username and password are valid response is ok.  
In case if username isn't valid it will be 400 error with message: 'User not found'  
In case if password isn't valid it will be 400 error with message: 'Wrong password'

## Get user 
Get request on http://localhost:5000/api/user/username where username it is specific user.  
If user was found response is `{"id": number, "username": string, "password": string }`  
The password is encrypted  
In case if username isn't valid it will be 400 error with message: 'User not found'  

## Get all users
Get request on http://localhost:5000/api/user  
Return array with all users 
