const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// middleware
app.use(bodyParser.json());

// define routes
const todoRoutes = require("./routes/todoRoutes");
app.use("/todos", todoRoutes);

// Start the server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
