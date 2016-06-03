import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLEnumType,
  GraphQLNonNull
} from 'graphql';

const data = require('../../data/data.json');   //我们要用的模拟数据


const User = new GraphQLObjectType({
  name: 'User',
  description: 'User对象',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  }
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: User,
      args: {
          id: { type: GraphQLString }
      },
      resolve: function (_, args) {
          return data[args.id];
      }
    }
  }
});

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;
