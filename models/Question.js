const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: {
    type: String,
    required: [true, 'Question Field is required']
  },
  opt1: {
    type: String
  },
  opt2: {
    type: String
  },
  opt3: {
    type: String
  },
  opt4: {
    type: String
  },
  correctoption: {
    type: String
  },
  createdate: {
    type: Date,
    default: Date.now
  },
  createdby: {
    type: String,
    default: 'admin'
  }
});
// cREATE Model
const Question = mongoose.model('question', QuestionSchema);
module.exports = Question;
