# KeyNodeFinder
Search engine with a React frontend, Keycloak authentication, a Node.js backend, and a PostgreSQL database

### 1. Keycloak authentication
- Pull and run docker keycloak
```
docker pull jboss/keycloak
docker run -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -p 8180:8080 jboss/keycloak
```
- Set up Realm, client and users.

### 2. Server side (backend)
- Initializes a new Node.js project and install dependencies
```
npm init -y
npm i express cors jsonwebtoken dotenv pg
```
- Set up in .env: keycloak public key and PSQL variables (user, host, db_name, db_password). 

- Run server
```
node server.js
```
### 3. Client side (frontend)
- Create a new React application and install dependencies.
```
npx create-react-app .
npm install keycloak-js axios
```
- Start client
```
npm start
```
### 4. PostgreSQL
- Install PostgreSQL 
- For this tutorial I created a simple table as an example:
```
CREATE TABLE biosample (
    id SERIAL PRIMARY KEY,
    biosample VARCHAR(30),
    bioproject VARCHAR(30),
    drr VARCHAR(30),
    email VARCHAR(100)
);
INSERT INTO biosample (biosample, bioproject, drr, email) VALUES ('BS12345', 'BP12345', 'DRR12345', 'newuser@server.com');
```
### Simple Demo with mock data
[Search DDBJ Private Data](https://github.com/aghelfi-ddbj/KeyNodeFinder/blob/main/demo/Demo_20231204.pdf)
