require("dotenv").config();
require("express-async-errors");

// express
const express = require("express");
const app = express();

// connectDB
const connectDB = require("./db/connect");

// routers
const questionRouter = require("./routes/questionRoutes");

//Middleware
const notFoundMiddleWare = require("./middleware/not-found");
const errorHandlerMiddleWare = require("./middleware/error-handler");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("solveXpert api");
});
app.use("/api/v1/questions", questionRouter);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleWare);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
