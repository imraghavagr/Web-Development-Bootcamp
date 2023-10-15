# API Authentication 

Authenticating ourself with the API provider. 
We do not one anyone to access any data using the APIs provided without proper authentication. 

# Four Teirs of Authentication: 

0. No Authentication
1. Basic Authentication
2. API Key Authorisation
3. Token Based Authentication


## 1. No Authentication: 

None of the endpoints in the API require any sort of authentication. What can we do to prevent abuse of the API. We put a rate limit. For eg. 100 requests per 15 min. So that an individual does not puts a lot of requests and brings the whole API down for rest of the people. 

## 2. Basic Authentication: 

We provide a username and password when we make our API request. This means we are authenticating ourself with the API provider. The provider already has our details, and by providing our username and password we first authenticate ourselves. 

### Base64 Encoding: 
Usually the way that basic authentication is done is bye passing over a base 64 encoded string in the header of the request. 

**What is Base64 Encoding?**
We take the character input, convert it into bits and then again covert the into Base64 encoded characters. Usually the number of characters get expanded after this encoding. For eg. "Man" -> {....bits....} -> "TWFu". 

Go to https://secrets-api.appbrewery.com/ and play around with it using POSTMAN. 

When we use POSTMAN for basic authorization and give it our username and pasword, the authorization header will be automatically generated when you send the request. 
We can see the generated autherization key by going to Header tab in POSTMAN. 

While doing all this in coding, Axios will do all this for us. 

The generated Base64 string will be of following form: 
Basic bmFoaWJhdGF1bmdhMTIzOm5haGliYXRhdW5nYTMyMQ==
The string after the word "Basic" will be our encoded username and password. 


## 3. API Key Authorisation: 

**Authorisation vs Authentication**
If we have a user, they can authenticate themselves with our server. But authorization is simply a client who is allowed to use our service with an API key that might be associated with a user, in which they are authenticating themselves and then getting an API key. 


## 4. Token Based Authentication
Even more secure because essentially we're getting the user to use a username and password to log in and then once they'have logged in, we generate a token to be used with the API so the API doesn't get involved with the username and password and instead its the token that's constantly being used to interact with the API. 

Normally token based authentication is seen as OAuth and OAuth 2.0 is probably the industry standard for doing token based authentication. 

