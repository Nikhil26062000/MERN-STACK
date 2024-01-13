
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth-middleware');

const {adminUser} = require('../controllers/admin-controller');
const {adminContact} = require('../controllers/admin-controller');
router.route("/user").get(authMiddleware,adminUser);
router.route("/contact").get(authMiddleware,adminContact);

module.exports = router;
