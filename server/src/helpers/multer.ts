import multer, { FileFilterCallback } from 'multer'
import { NextFunction, Request, Response } from 'express'
import path from 'path'
const uploadPath = path.join(__dirname, '../../../client/public/Images/')
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const fileTypes = /jpeg|jpg|png/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('File type not allowed. Only images are allowed.'));
  }
};

const uploadImage = async (req: Request, res: Response, next: NextFunction) => {
  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, uploadPath);
    },
    filename: function(req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });

  const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 },
  }).single('productPhoto');

  upload(req, res, (err) => {
    if (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({
          message: 'Multer error occurred during upload.',
          error: err.message,
        });
      } else {
        return res.status(400).json({
          message: 'File upload error.',
          error: err.message,
        });
      }
    }
    next();
  });
};

export default uploadImage

