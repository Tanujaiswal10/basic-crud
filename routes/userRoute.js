const userController = require("../controller/userController")

const express = require("express");
const route = express.Router();

route.post("/create",userController.createUser)


module.exports = route;