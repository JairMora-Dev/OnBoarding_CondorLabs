import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

app.listen(PORT, () => console.log(`Server on PORT: ${PORT}`));
