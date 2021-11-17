import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers';

const typeDefs = `

    type Query {
        hello: String
        Users: [User]
    }

    type User {
      _id: ID
      firtsName: String
      lastName: String
      age: Int
    }

    type Mutation {
      createUser(input: UserInput ): User
      deleteUser(_id: ID): User
      updateUser(_id: ID, input: UserInput): User
    }

    input UserInput {
      firtsName: String!
      lastName: String!
      age: Int!
    }
`;

export const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
