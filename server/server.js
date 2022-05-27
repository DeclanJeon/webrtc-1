const express = require("express");
const app = express();
const cors = require("cors");
const { resolve } = require("path");
const routes = require("./routes/router.js");
const morgan = require("morgan");

let io, server;
let port = 3000;

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(routes);
app.use(cors());

app.use(express.static(resolve(__dirname, "../public")));

server = require("http").createServer(app);
server.listen(port, () => [console.debug(`Server Listen on port...${port}`)]);
