# React + TS Frontend, Express API Backend, Mongo Database starter pack
This repo is a dockerized fullstack starter pack made of three services :
- **database** : Mongodb database;
- **backend** : Node/Express API;
- **frontend** : React SPA bundled with Vite, written with Typescript.

## Setup
### Prequisites
- Docker engine;
- Docker compose;

*App has been tested on x64 architecture. For arms, you might need to change containers base images in the `docker-compose.yml` file.*

### Installation
- clone the repo;
- create a .env file at the filesystem root from the .env.example file : `cp .env.example .env`;
- edit the .env file with your spotify client_id and secret keys;
- start docker compose `docker-compose up -d`
- install packages in backend and frontend containers :

  `docker exec -ti [APP_NAME]-backend yarn install`

  `docker exec -ti [APP_NAME]-frontend yarn install`

- App is ready to start!

### Running
To run the app:
- Build backend :
  `docker exec -ti [APP_NAME]-backend yarn build`
- Run backend :
  `docker exec -d [APP_NAME]-backend yarn start`

- Build frontend :
  `docker exec -ti [APP_NAME]-frontend yarn build`
- Run frontend :
  `docker exec -d [APP_NAME]-frontend yarn vite preview`

App should be available at http://localhost
Api should be available at http://localhost:2100


### Developing
To develop while watching files:
- Run backend:
  `docker exec -ti [APP_NAME]-backend yarn dev`
- Run frontend in another terminal:
  `docker exec -ti [APP_NAME]-frontend yarn dev`
