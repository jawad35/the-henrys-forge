const { toTitleCase } = require("../config/function");
const Category = require("../models/categories");
const fs = require("fs");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create Category -- Admin
exports.CreateCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.create(req.body);
  res.status(201).json({
    success: true,
    categoryData: category,
  });
});

exports.GetAllCategory = catchAsyncErrors(async (req, res, next) => {
  try {
    const categories = await Category.find({}).sort({ _id: -1 });
    if (categories) {
      return res.json({ 
        categories,
        success:true 
      });
    }
  } catch (err) {
    console.log(err);
  }
});


// Delete Category

exports.deleteCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(new ErrorHander("Category not found", 404));
  }
  await category.remove();
  res.status(200).json({
    isDeleted: true,
    message: "Category Delete Successfully",
  });
});

