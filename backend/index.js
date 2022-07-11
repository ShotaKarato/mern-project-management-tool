const express = require("express");
const colors = require("colors");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const { graphqlHTTP } = require("express-graphql");
// db
const connect = require("./db/connect");
// schema
const schema = require("./schema/schema");

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV !== "production",
  })
);

app.listen(port, async () => {
  console.log(`🚀 Server is running on port ${port}`);
  await connect();
});
