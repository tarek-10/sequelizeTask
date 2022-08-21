const express = require("express");
const createTable = require("./Configration/createTable");
const { userRouter } = require("./router/app.router");

const port = 3000;

const app = express();
app.use(express.json());
createTable();
app.use(userRouter);

app.listen(port, () => {
  console.log(`App Listening Successfully...! At Port ${port}`);
});
