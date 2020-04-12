const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const expenseController = require('../controllers/expenseController');
const pdfController = require('../controllers/pdfController');
router.get('/', (req, res) => {
  res.send('Welcome to the express-services');
});
router.post('/signup', authController.create);
router.post('/login', authController.findOne);
router.post('/addexpense', expenseController.create);
router.post('/getexpense', expenseController.find);
router.post('/createPdf', pdfController.create);
router.get('/getPdf', pdfController.findOne);

module.exports = router;
