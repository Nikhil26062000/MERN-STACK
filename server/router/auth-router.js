const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const validate = require("../middleware/validate-middleware");
const Schema = require("../validators/auth-validator")
const authMiddleware = require("../middleware/auth-middleware")

//?This is also a way to set up a route and below is another way to set up route.
//  router.get("/",(req,res)=>{
//     res.status(200).send("Welcome Nikhil by router");
// })

router.route("/").get(authControllers.Home);

router.route("/register").post(validate(Schema.signupSchema),authControllers.Register);

router.route("/login").post(validate(Schema.loginSchema),authControllers.login);

router.route("/user").get(authMiddleware,authControllers.user);

module.exports = router;
