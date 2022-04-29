[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7611387&assignment_repo_type=AssignmentRepo)
# a05 Human Interface

In this assignment, you will build an HTML human interface for your API. You will also document your API endpoints and consider package structure.

## DO NOT CLONE THIS REPOSITORY DIRECTLY

Use the GitHub classroom link instead: https://classroom.github.com/a/PUVGxeMe

If you clone this repo directly, it will not be added to the organization as an individual repo associated with your account and you will not be able to push to it.

## Instructions

Full instructions for this assignment are available at: https://comp426.johndmart.in/a/05/

<!-- DELETE EVERYTHING ABOVE THIS LINE -->

# Coinserver Description

This package exposes endpoints and provides a web interface to emulate random chance coin flip events in the following ways:

1. Flip one coin - returns result of a coin flip
2. Flip many coins - returns the results of many coin flips with a summary
3. Guess a coin flip and - returns the result of a flip and guess match

# Coinserver Installation

Run `npm install` inside the package root directory.

This package was buid using Node.js LTS (16.x).
Other package dependency and version information can be found in `package.json`.

# Coinserver Runtime Documentation
```
node server.js [options]

--port, -p	Set the port number for the server to listen on. Must be an integer
            between 1 and 65535. Defaults to 5000.

--debug, -d If set to true, creates endlpoints /app/log/access/ which returns
            a JSON access log from the database and /app/error which throws 
            an error with the message "Error test successful." Defaults to 
            false.

--log, -l   If set to false, no log files are written. Defaults to true.
            Logs are always written to database.

--help, -h	Return this message and exit.
```

# Coinserver API Documentation

## Endpoints

### /app/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/
```

#### Response body

```
{"message":"Your API works! (200)"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 35
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 07 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/flip
```

#### Response body

```
{"flip":"heads"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 16
ETag: W/"10-N9e0DDykqBPnqphc8f4bzHcjsuM"
Date: Tue, 26 Apr 2022 01:59:44 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flips/:number/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/flips/5
```

#### Response body

```
{"raw":["tails","tails","tails","heads","heads"],"summary":{"heads":2,"tails":3}}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 81
ETag: W/"51-1C5J78i0y+BsrFBuh4BIJt6e66w"
Date: Tue, 26 Apr 2022 02:07:35 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/coin/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/flip/coin/
```

#### Response body

```
{"flip":"heads"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 16
ETag: W/"10-N9e0DDykqBPnqphc8f4bzHcjsuM"
Date: Tue, 26 Apr 2022 02:11:26 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/call/:guess/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/flip/call/heads
```

#### Response body

```
{"call":"heads","flip":"heads","result":"win"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 46
ETag: W/"2e-U/q8iZ4JKqczXPIvtwiVRpEFlRc"
Date: Tue, 26 Apr 2022 02:11:57 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/call/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"guess":"heads"}' http://localhost:5000/app/flip/call/
```

#### Response body

```
{"call":"heads","flip":"heads","result":"win"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 46
ETag: W/"2e-U/q8iZ4JKqczXPIvtwiVRpEFlRc"
Date: Thu, 07 Apr 2022 16:30:07 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/coins/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"number":"30"}' http://localhost:5000/app/flip/coins/`
```

#### Response body

```
{"raw":["heads","heads","heads","tails","heads","heads","tails","tails","tails","heads","heads","heads","heads","heads","heads","tails","tails","heads","heads","heads","heads","heads","heads","heads","tails","heads","tails","heads","tails","heads"],"summary":{"heads":21,"tails":9}}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 283
ETag: W/"11b-9dPTqGfngSPFEOq4loChIlpdSIE"
Date: Thu, 07 Apr 2022 15:23:35 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/log/access/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/log/access
```

#### Response body

```
[{"id":1,"remoteaddr":"::1","remoteuser":null,"time":"1650939499400.0","method":"GET","url":"/app/log/access","protocol":"http","httpversion":1.1,"status":200,"referer":null,"useragent":"curl/7.74.0"},{"id":2,"remoteaddr":"::1","remoteuser":null,"time":"1650939529482.0","method":"GET","url":"/app/log/access","protocol":"http","httpversion":1.1,"status":200,"referer":null,"useragent":"curl/7.74.0"},{"id":3,"remoteaddr":"::1","remoteuser":null,"time":"1650939758696.0","method":"GET","url":"/app/error","protocol":"http","httpversion":1.1,"status":200,"referer":null,"useragent":"curl/7.74.0"}]
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 401
ETag: W/"191-zIX/D9vHmBhTLyWkUb1+6Em57CE"
Date: Tue, 26 Apr 2022 02:18:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/log/access/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/error
```

#### Response body

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Error: Error Test Successful<br> &nbsp; &nbsp;at error (file:///C:/Users/Stephen%20Buck/Documents/comp426/a05-stephrb/src/middleware/debugMiddleware.js:13:11)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (C:\Users\Stephen Buck\Documents\comp426\a05-stephrb\node_modules\express\lib\router\layer.js:95:5)<br> &nbsp; &nbsp;at next (C:\Users\Stephen Buck\Documents\comp426\a05-stephrb\node_modules\express\lib\router\route.js:137:13)<br> &nbsp; &nbsp;at Route.dispatch (C:\Users\Stephen Buck\Documents\comp426\a05-stephrb\node_modules\express\lib\router\route.js:112:3)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (C:\Users\Stephen Buck\Documents\comp426\a05-stephrb\node_modules\express\lib\router\layer.js:95:5)<br> &nbsp; &nbsp;at C:\Users\Stephen Buck\Documents\comp426\a05-stephrb\node_modules\express\lib\router\index.js:281:22<br> &nbsp; &nbsp;at Function.process_params (C:\Users\Stephen Buck\Documents\comp426\a05-stephrb\node_modules\express\lib\router\index.js:341:12)<br> &nbsp; &nbsp;at next (C:\Users\Stephen Buck\Documents\comp426\a05-stephrb\node_modules\express\lib\router\index.js:275:10)<br> &nbsp; &nbsp;at Function.handle (C:\Users\Stephen Buck\Documents\comp426\a05-stephrb\node_modules\express\lib\router\index.js:174:3)<br> &nbsp; &nbsp;at router (C:\Users\Stephen Buck\Documents\comp426\a05-stephrb\node_modules\express\lib\router\index.js:47:12)</pre>
</body>
</html>
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 401
ETag: W/"191-zIX/D9vHmBhTLyWkUb1+6Em57CE"
Date: Tue, 26 Apr 2022 02:18:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/log/error/ (GET)

_Not yet implemented_

#### Request cURL

```
curl http://localhost:5000/app/log/error
```

#### Response body

```
[{"id":1,"remoteaddr":"::null","remoteuser":null,"time":"1650939499400.0","method":"GET","url":"/app/DNE/","protocol":"http","httpversion":"1.1","status":"404.0","referer":null,"useragent":"curl/7.74.0"}]
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 401
ETag: W/"191-zIX/D9vHmBhTLyWkUb1+6Em57CE"
Date: Tue, 26 Apr 2022 02:18:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/user/login/ (POST)

_Not yet implemented_

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"username":"user", "password":"password123"}' http://localhost:5000/app/user/login/
```

#### Response body

```
{"username":"user", "logged_in":true}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 401
ETag: W/"191-zIX/D9vHmBhTLyWkUb1+6Em57CE"
Date: Tue, 26 Apr 2022 02:18:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/user/new/ (POST)

_Not yet implemented_

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"username":"user", "password":"password123"}' http://localhost:5000/app/user/new/
```

#### Response body

```
{"username":"user", "created":true}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 401
ETag: W/"191-zIX/D9vHmBhTLyWkUb1+6Em57CE"
Date: Tue, 26 Apr 2022 02:18:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/user/update/ (PATCH)

_Not yet implemented_

#### Request cURL

```
curl -X PATCH -H 'Content-Type: application/json' -d {"username":"user", "password":"password321"}' http://localhost:5000/app/user/update/
```

#### Response body

```
{"username":"user", "updated":true}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 401
ETag: W/"191-zIX/D9vHmBhTLyWkUb1+6Em57CE"
Date: Tue, 26 Apr 2022 02:18:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/user/delete/ (DELETE)

_Not yet implemented_

#### Request cURL

```
curl -X DELETE -H 'Content-Type: application/json' -d {username":"user", "password":"password123"}' http://localhost:5000/app/user/update/
```

#### Response body

```
{"username":"user", "deleted":true}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 401
ETag: W/"191-zIX/D9vHmBhTLyWkUb1+6Em57CE"
Date: Tue, 26 Apr 2022 02:18:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```
