const Question = require('../models/Question');
//Writing the resolvers for the queries in the schema file for queries
const resolvers = {
  Query: {
    allQuestions: () => {
      return Question.find();
    },
    question: (root, { id }) => {
      return Question.findById(id);
    }
  },
  Mutation: {
    addQuestion: (root, { input }) => {
      console.log(input);
      let q = new Question(input);
      return q.save();
    },
    delQuestion: (root, { input }) => {
      Question.remove({ _id: input.id }, function(err) {
        if (err) {
          return err;
        }
        var obj = {
          message: 'deleted'
        };
        return obj;
      });
    }
  }
};

module.exports = resolvers;
