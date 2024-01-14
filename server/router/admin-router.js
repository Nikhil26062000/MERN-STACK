
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth-middleware');

const {adminUser} = require('../controllers/admin-controller');
const {deleteUserInDatabase} =require('../controllers/admin-controller');
const {adminGetUserById} = require('../controllers/admin-controller')
const {adminContact} = require('../controllers/admin-controller');

router.route("/user").get(authMiddleware,adminUser);

router.route("/user/:id").get(authMiddleware,adminGetUserById);

router.route("/contact").get(authMiddleware,adminContact);
router.route("/user/delete/:id").delete(authMiddleware,deleteUserInDatabase);

module.exports = router;
