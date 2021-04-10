const express = require("express");
const server = express();

server.get("/", (request, response) => {
  console.log("index");

  return response.send("opa");
});
server.listen(3002, () => console.log("rodando"));
