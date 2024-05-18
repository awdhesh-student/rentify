const express = require("express");
const authMiddleware = require("../middlewares/authMiddlware");

const {
  registerController,
  loginController,
  forgotPasswordController,
  authController,
  getAllPropertiesController,
  bookingHandleController,
  getAllBookingsController,
  handlesLikeController,
} = require("../controllers/userController");
const authMiddlware = require("../middlewares/authMiddlware");

const router = express.Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

router.post("/register", registerController);

router.post("/login", loginController);

router.post("/forgotpassword", forgotPasswordController);

router.get("/getAllProperties", getAllPropertiesController);

router.post("/getuserdata", authMiddleware, authController);

router.post(
  "/bookinghandle/:propertyid",
  authMiddleware,
  bookingHandleController
);

router.get("/getallbookings", authMiddleware, getAllBookingsController);

router.post("/toggleLike", authMiddlware, handlesLikeController);

module.exports = router;
