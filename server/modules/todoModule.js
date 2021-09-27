const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      required: true,
      default: false,
    },
    isFavorite: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const TodoData = mongoose.model('todo', todoSchema);

module.exports = TodoData;
