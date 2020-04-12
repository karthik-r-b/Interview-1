'use strict';
let Expense = require('../models/ExpenseModel');

module.exports.create = async (req, res) => {
  const { email, name, tracker, month, type, description, amount } = req.body;

  let expenseModel = new Expense({
    email,
    name,
    tracker,
    month,
    type,
    description,
    amount,
  });

  try {
    await expenseModel.save();
    res.status(200).json({ success: true, message: 'Added successfully' });
  } catch (error) {
    console.error(error);
    res.status(200).json({ success: false, message: 'Unexpected Failure' });
  }
};

module.exports.find = async (req, res) => {
  let result = '';
  const { email, month, tracker } = req.body;
  try {
    result = await Expense.find({ email, month, tracker });
  } catch (error) {
    console.log(error);
    result = { message: 'Unexpected Failure' };
    res.status(400).json(result);
  } finally {
    res.status(200).json(result);
  }
};
