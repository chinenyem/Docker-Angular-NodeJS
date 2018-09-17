Chinenyem Nwadiugwu LinkedIn
https://www.linkedin.com/in/chinenyem/

Other Work
http://www.chinenyem.agency/
https://chinenyemagency.firebaseapp.com/

# Docker-Angular-NodeJS

Problem: There is a need to know the real time of public transportation and to know where the user is located.

Solution: Create an application that provides real time public transportation updates utilizing the BART API.

Technologies used:
Front End Angular 6
Back End NodeJS
Docker Containers for containerization
Host Provider: Firebase
(If I had more time I would use Docker Cloud and AWS for deployment and hosting)

Website Hosted:  https://bartapp-6c9d8.firebaseapp.com/

How to run it?

You can run this application 2 different ways. 

1st way:
1.You will have to have Docker Installed
2.Create a folder. 
3.In that folder git clone this repo.
4. Run the following command  docker-compose up --build

2nd Way (If you don't have docker you can just run the front end)
1. git clone this repo.
2. npm install @angular/cli -g
3. In the angular-frontend folder npm install
4. run the command ng build
5. run the command ng serve

Why the BART API?
The BART API provides real time arrival updates. It is widely used by more than 5,000 developers and is very reliable. There isn't a need to sing agreement to obtain an API key. It is quick and easy to use.

Why use Angular 6?
Angular is great to use because it allows you to continually growing your application at a large scale. I almost decided on using React but it has scalability challenges. For example Airbnb choose to sunset React Native because of the difficulty of refactoring react code, a long with its steep learning curve and boilerplate involved with redux. Angular has easy to use tooling called Angular cli. Within seconds you can have a unit testing, complied, typescript included, basic ui template built for you in seconds. Plus installation is easy to do, just install angular/cli globally, ng init, and ng generate, ng build and walaaaa! Plus Angular allows for custom schematics. I choose to build my servers and components into separate directories. The services hold code that have http request. The components hold my business logic. Also Angular has built in data streaming. It installs RxJs for me to use for asynchronous programming library that favors observables and promises.

Why use NodeJS?

NodeJS shines in real-time applications, two-way connection where both the client and the server can intake communication. This allows for data to be exchange freely. It is lightweight and efficient in the face of data intensive real time applications. Plus it is great for building fast scalable network enterprise applications.

Host Provider: Firebase
In brevity of time I decided to host the front end angular built dist folder on Firebase Cloud. It is quick and easy to use. Literally three commands. Install firebase globally, firebase init, firebase deploy. However If I had more time I would push my docker images to their docker repo. Then I would deploy my docker containers to docker cloud using Amazon Web Services. This of course would take a day or two for agreements and permissions to take place.

Why Docker?
I built this app first by creating docker containers for the front end, back end and a database (if needed in the future). I wanted to keep my diverse software separate. Each container has its own DOCKERFILE. This tells the container how to be built. Then in parent directory the docker-compose.yml tells the containers how to talk to each other.  When they are separate it is easy for me to scale each one, and upgrade or downgrade dependencies. Docker allows me to run applications in its own separate containers. Once the containers are built they can talk to each other. My docker containers wrap its own software in a complete file system that contains everything to run: code, runtime, system tools, system libraries, and etc. This guarantees that the software will always run the same, regardless of its environment. Each Docker image contains only what is needed for the application to run. Docker is platform independent. It can run in any environment. If you have docker installed run docker-compose up --build in the parent directory and then go to localhost:4200.

Testing with Karma
I decided to go with Karma for front end unit testing because it already came built in with angular/cli. Plus it provides examples on how to use it. The benefit of unit testing with Karma is it improves the design of implementations. You don't have to rewrite code over and over again because you first implemented wrong. You can add changes to your code with certainty that you aren't adding bugs. Also you can add new features without breaking anything. If I had more time I would have used Mocha a NodeJS testing framework to test the backend.

If I had more time:
I would write more tests for the back end and front end.
I would deploy my docker images to Docker cloud and Amazon Web Services.
I would strongly adhere to the 12-Facor App principles.
For security I would secure the back end from DDOS attacks. Right now anyone can make request to the BART API for millions of times.
I would add more error handling to my backend and front end functions that will fail gracefully.
I would create a wireframe interactive prototype and then build the front end.
I would add a  middleware logging feature to the backend. It would log when a request was made and if it was successful.
I would build the app using google maps and the BART API. The user would see themselves on the map and promixity of the selected train station. 
