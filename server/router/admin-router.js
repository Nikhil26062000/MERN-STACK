
const express = require('express');
const router = express.Router();

const {adminUser} = require('../controllers/admin-controller');
const {adminContact} = require('../controllers/admin-controller');
router.route("/user").get(adminUser);
router.route("/contact").get(adminContact);

module.exports = router;
