const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();

// Overpass API for retrieving map data
const overpass = require("query-overpass");
const overpassURL = "https://lz4.overpass-api.de/api/interpreter";

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});




console.log("hello");

overpass('node(44.9454,-93.3000,44.9680,-93.2850);out;', function (error, response) {
  if (error) {
    console.log(error);
    return;
  }
  response = JSON.stringify(response, null, 2);
  console.log(response);
});





// app.listen(PORT, () => {
//   console.log(`🌎 ==> Server now on port ${PORT}!`);
// });
