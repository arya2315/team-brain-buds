const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
  createMember, getAllMembers, getMemberById
} = require('../controllers/memberController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.post('/', upload.single('image'), createMember);
router.get('/', getAllMembers);
router.get('/:id', getMemberById);

module.exports = router;
