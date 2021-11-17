import user from './models/user';

export const resolvers = {
  Query: {
    hello: () => {
      return 'Hello world with GraphQL';
    },
    async Users() {
      return await user.find();
    },
  },
  Mutation: {
    async createUser(_, { input }) {
      const newUser = new user(input);
      await newUser.save();
      return newUser;
    },
    async deleteUser(_, { _id }) {
      return await user.findOneAndDelete(_id);
    },
    async updateUser(_, { _id, input }) {
      return await user.findByIdAndUpdate(_id, input, { new: true });
    },
  },
};
