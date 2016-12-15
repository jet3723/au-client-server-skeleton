This directory contains the router implementations for the server.
The default configuration provides two routers (index.js and api.js).
The router index.js contains the default route for the server (/index.html).
The router api.js contains a router for servicing web service API calls
at the url (/api/*). There is a default api service installed called
/api/testme which simply renders an JSON file. Extend the api router
or add new routers based upon your application needs.
