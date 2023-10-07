const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Banner = require("../models/bannerModal");
const cloudinary = require("cloudinary");
const ErrorHander = require("../utils/errorhander");

// Create Product -- Admin
exports.createBanner = catchAsyncErrors(async (req, res, next) => {
  const myBannerCloud = await cloudinary.v2.uploader.upload(req.body.images, {
    folder: "banners",
  });
  const banner = await Banner.create({
    banner: {
      public_id: myBannerCloud.public_id,
      url: myBannerCloud.secure_url,
    },
  });

  res.status(201).json({
    success: true,
    banner,
  });
});

exports.getHomeBanner = catchAsyncErrors(async (req, res, next) => {
  const banner = await Banner.find();
  res.status(200).json({
    success: true,
    banner,
  });
});

exports.UpdateHomeBanner = catchAsyncErrors(async (req, res, next) => {
  let banner = await Banner.findById(req.body.id);
  if (!banner) {
    return next(new ErrorHander("Banner not found", 404));
  }
  // Images Start Here
  let images = [];
  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }
  if (images !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < banner.images.length; i++) {
      await cloudinary.v2.uploader.destroy(banner.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "banners",
        chunk_size:6000000
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  banner = await Banner.findByIdAndUpdate(req.body.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    banner,
  });
})