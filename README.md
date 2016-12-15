# au-client-server-skeleton
A skeleton application that demonstrates how to integrate an Aurelia Client with a Node server. The skeleton starts out with a basic Node JS Server that uses Express and a number of other Node packages. The server's routes are setup to either serve the Aurelia client application starting at /index.html or to serve web services at the URI **/api/**. There is a default URL web service API implemented at **/api/testme**. The server is located in the directory **/server**. The Client is either generated or supplied based upon how the recipe below is followed.

(Here)[https://github.com/jet3723/au-client-skeleton.git] is a client that I used to test the **au-client-server-skelton** application. Try this client if you don't have a client or dont' want to create a client. See the **tutorials** to see a step by step recipe for including a client that you already have.

While this page provides a quick and dirty description of how to get the skeleton application up and running, I've provided detailed tutorial topics in the [Tutorials](https://github.com/jet3723/au-client-server-skeleton/wiki/Tutorials).

## A Recipe for the Client Server Skeleton Application
This recipe depends upon the [Aurelia CLI](https://github.com/aurelia/cli) having been previously installed.

1. Clone this repository: **git clone https://github.com/jet3723/au-client-server-skeleton.git**
2. Add or Create the Aurelia Client application
  Do one of the following steps:
  * Copy an existing Aurelia application into the directory **./client**
  * Generate a default Aurelia Client using the **Helper Script** described below.
3. Finish the Server Installation by executing the following commands:
  * **cd ./server**
  * **npm install**
4. Build the client
  * **cd ./client**
  * **au run**
5. Finish the Client Installation by executing the following command:
  * **mv ./client/index.html ./server/views/index.html**

## Run the Server
- Execute the commands
  * **cd ./server**
  * **node server.js**

### Helper Script
**create-aurelia-client.sh** is a script for Linux or Mac OS that can be used to create a default Aurelia client app using the [Aurelia CLI](https://github.com/aurelia/cli). If you have not installed this then you should do that now. The generated client is moved into the Client Server Skeleton's **client** directory. 

**Usage:** ./create-aurelia-client.sh <aureliaAppName>
   where: <aureliaAppName> is the name of the app that is entered when the CLI is invoked by the **create-aurelia-client.sh** script. Note the application name should consist of alpha-numeric characters only.
   

