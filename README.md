# au-client-server-skeleton
A skeleton application that demonstrates how to integrate an Aurelia Client with a Node server. The skeleton starts out with a basic Node JS Server that uses Express and a number of other Node packages. The server's routes are setup to either serve the Aurelia client application starting at /index.html or to serve web services at the URI **/api/\***. There is a default URL web service API implemented at **/api/testme**. The server is located in the directory **/server**.

Next the Aurelia Client application must be added to the server. This can be done by either copying an existing Aurelia application to the **/client** directory, or, by generating a default Aurelia Client using the **Helper Script** described below.



# Helper Script
**create-aurelia-client.sh** can be used to create a default Aurelia client app using the [Aurelia CLI](https://github.com/aurelia/cli). The generated client is moved into the Client Server Skeleton's **client** directory.

**Usage:** ./create-aurelia-client.sh <aurelia-app-name>
   where: <aurelia-app-name> is the name of the app that is entered when the CLI is invoked by the **create-aurelia-client.sh** script.
