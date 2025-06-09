const multer = require("multer");

const directory = "public/assets/users-images/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, directory);
  },
  filename: (req, file, cb) => {
    const extension = file.originalname.split(".")[1];

    const date = new Date();
    const randomNumber = date.getMilliseconds() * (Math.random() * 10000);
    const newFileName = randomNumber.toString(16);

    cb(null, `${newFileName}.${extension}`);
  },
});

module.exports = multer({ storage });
