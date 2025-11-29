const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello from ECS!"));

app.listen(80, () => console.log("Running on port 80"));
