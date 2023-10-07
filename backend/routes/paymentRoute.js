const express = require("express");
const {
  processOrder,
  orderCapture,
} = require("../controllers/paymentController");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/orders").post(isAuthenticatedUser, processOrder);
router.route("/orders/:orderID/capture").post(isAuthenticatedUser, orderCapture);

module.exports = router;
