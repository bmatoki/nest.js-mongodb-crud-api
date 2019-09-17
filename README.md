# Nest.js-mongodb-crud-api

this is a simple crud operations for mongodb using mongoose and Nest.js framework..

## Getting Started

In order to install the application clone the repo.

Open cmd at project root and type
```
npm i
npm run debug

or
docker-compose up

```

### TODO REMAIN:

```
* http exception .
* unit tests.
* validations - dto.

```

### Prerequisites

```
* Node.js
* Typescript
* Nest.js
* mongodb \ docker.

```

for docker remote debug add the configuration:

```
    {
      "name": "Docker: Remote Debug",
      "type": "node",
      "request": "attach",
      "port": 9229,
      "address": "localhost",
      "localRoot": "${workspaceFolder}",
      "remoteRoot": "/usr/src/app",
      "protocol": "inspector",
      "restart": true
  }

```

for add data:

```
{
	"payload":{
	"name":"boaz",
	"todo":"shopping"
	}
}
```

### Dev Installing

**Setting up a deveplopment env**

Clone this repo.
```
git clone https://github.com/bmatoki/nest.js-mongodb-crud-api.git
```

Install the node dependencies for each service.

```
npm i 

```


### Running the tests

The tests are jests and needs a working dev environment.
Currently only the node apps contains unit and e2e testing.


```
To run the tests.

```
npm run test

```



### coding style 

Each code addition must be in line with the eslint and tslint in the project.
Those extend the airbnb style guide.

## Deployment

To install a production ready application you can follow the [Dev Installing](#dev-installing) after installing/validating Prerequisites are met.

## Uninstalling

Uninstall steps:
 * node - simply delete the files.
 * docker - stop the containers.
 * mongodb - stop mongodb service delete db.


## Built With

* Node.js
* mongodb
* docker
* Nest.js


## Authors

* Boaz Matoki
