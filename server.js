const express = require("express");
const app = express();
const http = require("http").Server(app);
const path = require("path");

const PORT = 60;
// Serve any static files built by React
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "client/public/", "index.html"));
});

http.listen(PORT, function () {
    console.log("server started using port: " + PORT);
});
