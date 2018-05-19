const { makeExecutableSchema } = require('graphql-tools');
const Question = require('./Question');
const resolvers = require('./resolvers');

const rootQuery = `
  type Resp{
      message:String
  }
   
    type Query{
        allQuestions:[Question]
        question(id:ID!):Question
    }
    type Mutation {
        addQuestion(input: CreateQuestionInput): Question
        delQuestion(input:DeleteProjectInput): Resp
    }
    input DeleteProjectInput {
        id: ID!
      }
    input CreateQuestionInput {
        question:String
        opt1:String
        opt2:String
        opt3:String
        opt4:String
        rightopt:String
      }
      
`;

const schema = makeExecutableSchema({
  typeDefs: [rootQuery, Question],

  resolvers
});

module.exports = schema;
