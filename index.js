const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const fs = require("fs");

// Ghi log vào tệp tin
fs.appendFileSync("app.log", "Thông tin log của bạn");

// Set default middlewares (logger, static, cors, and no-cache)
server.use(middlewares);

// Use default router
server.use(router);

module.exports = server;
