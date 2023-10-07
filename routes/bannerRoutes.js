const express = require("express");
const { createBanner, getHomeBanner, UpdateHomeBanner } = require("../controllers/bannerControll");
const router = express.Router();
const { loginCheck } = require("../middleware/auth");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {upload} = require("../utils/muter");

router.route("/admin/banner/new").post(isAuthenticatedUser, authorizeRoles("admin"),upload.single('images'), createBanner);
router.route("/admin/updatebanner").post(isAuthenticatedUser, authorizeRoles("admin"),upload.single('images'), UpdateHomeBanner);
router.route("/admin/banner").get(getHomeBanner);


module.exports = router;
