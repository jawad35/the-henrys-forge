const express = require("express");
const router = express.Router();
const {CreateCategory, GetAllCategory, deleteCategory } = require("../controllers/categoriesController");
const { loginCheck } = require("../middleware/auth");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
router.get("/admin/categories", GetAllCategory);
router.route("/admin/category/new").post(isAuthenticatedUser, authorizeRoles("admin"), CreateCategory);
router
  .route("/admin/category/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCategory);

module.exports = router;
