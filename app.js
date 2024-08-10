const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const errorMiddleware = require("./middleware/error");
const cors = require("cors");
const fs = require("fs");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require('dotenv').config();
}

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 }));

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");
const category = require("./routes/categoriesRoute");
const banner = require("./routes/bannerRoutes");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);
app.use("/api/v1", category);
app.use("/api/v1", banner);

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("*", (req, res) => {
  const indexPath = path.resolve(__dirname, "frontend/build", "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send("index.html not found");
  }
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
