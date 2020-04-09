const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
router.get('/', (req, res) => {
  res.send('Welcome to the express-services');
});
router.post('/signup', authController.create);
router.post('/login', authController.findOne);

module.exports = router;
