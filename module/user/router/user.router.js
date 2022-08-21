const express = require("express");

const router = express.Router();

//add user
const addUserController = require("../controller/addUser");
router.post("/user/adds", addUserController);
//end

//get all user
const getUserController = require("../controller/getUser");
router.get("/user/display", getUserController);
//end

//find one by id
const controllerUserById = require("../controller/userById.controller");
router.get("/user/:id", controllerUserById);
//end

//update user
const controllerUserUpdate = require("../controller/userUpdate.controller");
router.patch("/user/update/:id", controllerUserUpdate);
//end

//search user
const searchUsersController = require("../controller/searchUser.controller");
router.get("/user/query/search", searchUsersController);
//end

//search by age range between 20 & 30
const searchByAgeRngeController = require("../controller/searchByAge.controller");
router.get("/users/search/rangeage", searchByAgeRngeController);
//end

//get users where id equal (1,2,5,7,10)
const userSearchRangeById = require("../controller/userSearchId.controller");
router.get("/user/search/idRange", userSearchRangeById);
//end

module.exports = router;
