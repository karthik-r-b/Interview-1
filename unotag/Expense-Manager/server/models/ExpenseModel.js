const mongoose = require('mongoose');
const expenseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  tracker: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
});

const Expense = (module.exports = mongoose.model('expenses', expenseSchema));
