const pdf = require('html-pdf');
const pdfTemplate = require('../documents');
let Expense = require('../models/ExpenseModel');
module.exports.create = async (req, res) => {
  let result = '';
  const { email, month, tracker } = req.body;
  try {
    result = await Expense.find({ email, month, tracker });
  } catch (error) {
    console.log(error);
  }
  //   pdf creation
  if (result.length > 0) {
    pdf
      .create(pdfTemplate(req.body, result), {})
      .toFile('/public/files/tracker.pdf', (err) => {
        if (err) {
          res.send(Promise.reject());
        }
        res.send(Promise.resolve());
      });
  }
};

module.exports.findOne = async (req, res) => {
  res.sendFile('/public/files/tracker.pdf');
};
