import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';

import { dbConnect } from './dbMongo';

const PORT = 3000;
const app = express();
dbConnect();

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
    context: {
      messageId: 'test',
    },
  })
);

app.listen(PORT, () => console.log(`Server on PORT: ${PORT}`));
