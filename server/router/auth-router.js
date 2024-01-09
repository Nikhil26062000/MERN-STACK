const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const validate = require("../middleware/validate-middleware");
const signupSchema = require("../validators/auth-validator")

//?This is also a way to set up a route and below is another way to set up route.
//  router.get("/",(req,res)=>{
//     res.status(200).send("Welcome Nikhil by router");
// })

router.route("/").get(authControllers.Home);

router.route("/register").post(validate(signupSchema),authControllers.Register);

router.route("/login").post(authControllers.login);

module.exports = router;
