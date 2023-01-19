require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./config/db");

const signupRoute = require("./user/signup.route");
const loginRoute = require("./user/login.route");



const app = express();
app.use(express.json());
app.use(cors());

app.use("/signup",signupRoute)
app.use("/login",loginRoute)


app.listen(8080, async () => {
  await connect();
  console.log(`Listening to http://localhost:${8080}`);
});
