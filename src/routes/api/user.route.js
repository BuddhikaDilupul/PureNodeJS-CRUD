const express = require("express");
const router = express.Router();
const { validate } = require("express-validation");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");

router.post(
  "/",
  validate(userValidation.create),
  userController.create
);


module.exports = router;
