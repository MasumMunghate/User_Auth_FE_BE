import express from "express";
import {
  register,
  registerMail,
  resetpassword,
  updateUser,
  createResetSession,
  verifyOTP,
  generateOTP,
  username,
  login,
  authenticates,
  
} from "../controler/controler.auth.js";

const route = express.Router(); // Initialize the Router

// POST Methode
route.post("/register", register); // for register
route.post("/registermail", registerMail); // send email
route.post("/authenticate", authenticates); // authenticate user
route.post("/login", login); // login user

//GET Methode
route.get("/user/:username", username); // user with username
route.get("/generateOTP", generateOTP); // generate Random OTP
route.get("/verifyOTP", verifyOTP); // verify Generated otp
route.get("/createResetSession", createResetSession); // reset all the variable

// PUT Methode
route.put("/updateuser", updateUser); // used to update the user profile
route.put("/resetpassword", resetpassword); // use to reset password

export default route;
