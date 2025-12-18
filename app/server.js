const express = require("express");
const AWSXRay = require("aws-xray-sdk");

// capture all outgoing AWS SDK calls (if any later)
AWSXRay.captureHTTPsGlobal(require("http"));
// capture express middleware
const app = express();
app.use(AWSXRay.express.openSegment("ecs-hello-world-app"));

app.get("/", (req, res) => res.send("Hello from ECS with X-Ray! v2"));

app.use(AWSXRay.express.closeSegment());

app.listen(80, () => console.log("Running on port 80 with X-Ray v2"));
