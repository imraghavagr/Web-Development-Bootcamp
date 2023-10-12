# Introduction to APIs - Application Programming Interfaces

```                         
                          GET request
                        ---------------->
                                |
                                |
                                A
                Program A       |           Program B
            (speaks chinese)    P        (speaks japanese)
                                |
                                I
                                |
                                |    
                       <----------------
                        response data

```
- We need an interface in betweeen these two programs so that they know how to interact with each other through this bridge in the middle. 
- API bridges the communication between differenct pieces of software. 

E.g. 
Lets say we are building a diary website where we are write daily. And we want to add a little icon at the beginning of each entry that shows the weather for that day. We can do it by our own also. But when we looked around we found that there is a website - openWeather that has a weather database of all the locations and it updates frequently. That's exactly what I needed. I need to be able to talk to these servers to bring their weather data into my website. We don't know any idea about their website infrastructure. So, basically we have absolutely no idea of how this website or their data storage woks, and that is when the API comes in to save us. 
OpenWeather creates an API that tells us how we can interact with their services. If we want data from them, than there are these and these things we can access. For eg. if we pass lat and long of the location we are interested, they give us the weather. 
All we need to do is create a request to their API . And now we know how to interact with their database using the API they provided. 

API is just a set of rules. 


# Different types  of APIs

GraphQL, SOAP, REST:API, gRPC, etc. 

Based upon different architectural styles there are different-different APIs.

Most popular is REST APIs. 

# REST:API 
Its an API that follows a set of rules. Most importantly, the HTTP Protocol to interact with the API.

# Formatting API requests

1. API Endpoints 

BaseURL/Endpoint -> Different endpoints -> different routes to the server

2. Query Parameters - Putting key value pairs in the request 

We can pass different query and their values separated by '&' sign. They are placed after the endpoint followed by a '?'

bored-api.appbrewery.com/endpoint?query1=value1&query2=value2

3. Path Parameters

After the base URL, normally comes the end point, but an end point is usually a fixed path. 
Eg. for path parameter can be id or username

baseURL/endpoint/{path-parameter} 

Lets say we have a unique key for delhi city i.e. 2. And we want to fetch some data for key = 2. 

baseURL/endpoint/2


Query parameters are more for filtering and serching and path parameters are for identifying a resource. 