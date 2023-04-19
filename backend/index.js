const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port);