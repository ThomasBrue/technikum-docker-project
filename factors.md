The Twelve Factors

> I. Codebase

As version control system I have used Git:

https://github.com/ThomasBrue/technikum-docker-project

> II. Dependencies

For dependency management I have used npm (package.json).

> III. Config

As configuration files I have used a Dockerfile and a docker-compose.yml.
The Dockerfile has an ENV configuration that enables the server to connect to the database.

> IV. Backing services

As a backing service I have used mongoDB. The database can be accessed over
“mongodb://mongo:27017/subscribers” while running docker.
(The database can be accessed during local development (without docker via “npm run devStart”) via “mongodb://localhost/subscribers”.)

> V. Build, release, run

> > The source code can be built:

docker build -t thenebirs/my-docker-project .

> > The images can be tagged:

docker tag my-docker-project thenebirs/hello-docker-repo:v1.0

> > The tagged image can be released on docker-hub:

docker push thenebirs/hello-docker-repo:v1.0

> > The image can be pulled from docker hub.

docker pull thenebirs/hello-docker-repo:v1.0

> > The pulled image can be run (deployed) on any OS.

docker run thenebirs/hello-docker-repo:v1.0

> VI. Processes

The server-app is a stateless process that communicates with the database which is stateful. (Although it might not be the best idea to run a database during production in a container https://vsupalov.com/database-in-docker/)
The server-app is functional (self-contained) even if the mongoDB container goes down (Although certain functionalities like saving and querying users would not work any more).

> VII. Port binding

The app is self-contained due to the fact that the port binding is set in the Dockerfile via “ENV DATABASE_URL=mongodb://mongo:27017/subscribers” and does not have to be set from an external service.

> VIII. Concurrency

(NOT implemented in the project)
Concurrency can be achieved through stateles processes that function independent from each other but can communicate with each other. This allows to scale (multiply) specific processes.
The load balancing of processes (microservices/containers) can be achieved with Kubernetes.

> IX. Disposability
> Maximize robustness with fast startup and graceful shutdown

> > A specific container can be stopped with:

docker stop 25fab90b4c85

> > If you want to stop all container:

docker kill $(docker ps -q)

> > Images can be removed with:

docker rmi 794364abff68 -f

> > All images and running container can be removed by using:

docker system prune -a -f

> X. Dev/prod parity

It is possible to use the same database-type (mongoDB) during the local development stage as well as during the production stage (app is dockerized).

> XI. Logs
> Throughout the application logs have been placed to provide good visibility of the running app.
> Examples:
>
> > When a database connection has been achieved successfully
> > When the server is up and running and listens on a specific port
> > When a user has been added
> > When a user has been deleted
> > When the data of a user has been altered

> XII. Admin processes

(NOT implemented in the project)
Can be used for database migration and running console to inspect the current state of the app.
