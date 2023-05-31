const express = require("express");
const { root, savePendingWish } = require("../controller/santa");
const router = express.Router();

router.route('/').get(root).post(savePendingWish);

module.exports = router;