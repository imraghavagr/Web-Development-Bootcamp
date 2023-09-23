# Making Requests

Postman and making other HTTP requests 

```
                                    HTTP request
                             ========================>
    FrontEnt--------------------------------------------------------------- Backend
                            <========================
    (user/client)                    Response                   (Database + Server + Application)
    [Client Side]                                                      [Server Side]

```

Look into several response codes [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)


## Cheat sheet for remembering response code ranges:

1. 100s - Hold on - Giving you some info
2. 200s - Here you go - Success. 
3. 300s - Go away - Redirect 
4. 400s - You f*cked up - User/Client side mistake
5. 500s - I f*cked up - Server side mistake

## Create a backend without a frontend:

If we do not want to create a front-end for all these HTTP requests (GET, POST, PUT, PATCH, DELETE) and want to test all the requests, we can use a popular tool called POSTMAN. 
