# au-client-server-skeleton
A skeleton application that demonstrates how to integrate an Aurelia Client with a Node server. The skeleton starts out with a basic Node JS Server that uses Express and a number of other Node packages. The server's routes are setup to either serve the Aurelia client application starting at /index.html or to serve web services at the URI **/api/**. There is a default URL web service API implemented at **/api/testme**. The server is located in the directory **/server**. The Client is either generated or supplied based upon how the recipe below is followed.

## Acknowledgements
If you want to learn Aurelia and how web apps can be put together, you have to follow [Dwayne Charrington](https://twitter.com/AbolitionOf) on Twitter. This skeleton app is based upon one that he created [Aurelia Starter Node](https://github.com/Vheissu/aurelia-starter-node.git). My goal in creating my app and tutorials is to fill in details that are not obvious to new web developers and perhaps demonstrate some of the mechanics associated with a full stack development. But this task would be much harder if it were not for people like Dwayne and others that share knowledge.

## About Me
While not a prolific poster you can follow me on [Twitter](https://twitter.com/jamtns3435/) or [LinkedIn](https://www.linkedin.com/in/jimtaylor63). I've been developing software for 30+ years and now I'm dabbling in javascript based web applications.

## A Companion Client Application
[Here](https://github.com/jet3723/au-client-skeleton.git) is a client that I used to test the **au-client-server-skelton** application. Try this client if you do not have a client or do not want to create a client. See the **tutorials** to see a step by step recipe for including a client that you already have.

## Tutorials
While this page provides a quick and dirty description of how to get the skeleton application up and running, I've provided detailed tutorial topics in the [Tutorials](https://github.com/jet3723/au-client-server-skeleton/wiki/Tutorials).

# And Finally....
## A Recipe for the Client Server Skeleton Application
This recipe depends upon the [Aurelia CLI](https://github.com/aurelia/cli) having been previously installed.

1. Clone this repository: **git clone https://github.com/jet3723/au-client-server-skeleton.git**
2. Add or Create the Aurelia Client application. Do just one of the following steps:
  * Copy an existing Aurelia application into the directory **./client**. [This](https://github.com/jet3723/au-client-skeleton.git) client will do nicely.
  * Generate a default Aurelia Client using the **Helper Script** described below.
3. Build the client
  * **cd ./client**
  * **au run** -- works with the a generated client or the client skeleton.
4. Finish the Client Installation by executing the following command:
  * **mv ./client/index.html ./server/views/index.html**
5. Finish the Server Installation by executing the following commands:
  * **cd ./server**
  * **npm install**

## Run the Server
- Execute the commands
  * **cd ./server**
  * **node server.js**

### Helper Script
**create-aurelia-client.sh** is a script for Linux or Mac OS that can be used to create a default Aurelia client app using the [Aurelia CLI](https://github.com/aurelia/cli). If you have not installed this then you should do that now. The generated client is moved into the Client Server Skeleton's **client** directory. 

**Usage:** ./create-aurelia-client.sh <aureliaAppName>
   where: <aureliaAppName> is the name of the app that is entered when the CLI is invoked by the **create-aurelia-client.sh** script. Note the application name should consist of alpha-numeric characters only.
   

