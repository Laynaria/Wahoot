import * as dotenv from "dotenv";
import { ApolloServer } from "apollo-server";
import { UserResolver } from "../resolvers/user.resolver";
import { dataSource } from "./db";
import { buildSchema } from "type-graphql";
import { GraphQLError } from "graphql";
import { verifyToken } from "../services/auth.service";
import { getByEmail } from "../services/user.service";

const createServer = async (): Promise<ApolloServer> => {
  dotenv.config();
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [UserResolver],
    validate: { forbidUnknownValues: false },
    // we use the authChecker function, which will use the context we used
    // from apollo and check roles from our users.
    // it will return true or false
    authChecker: async ({ context }) => {
      try {
        // we return the token payload inside a const
        const payload: any = verifyToken(context.token);
        // we then get back the user based on his email from that payload
        const user = await getByEmail(payload.email);
        // we had that user object to our context
        context.user = user;

        // role validation to add if necessary for this app

        // if there is no role passed on our resolver query, we simply return true
        return true;
      } catch (e) {
        // if error, throw a special graphQL error which will be used in frontend to disconnect
        throw new GraphQLError(
          "You don't have Authorization for this action!",
          null,
          null,
          null,
          null,
          null,
          {
            code: "UNAUTHENTICATED",
          }
        );
      }
    },
  });

  return new ApolloServer({
    schema,
    // we add a context which will be used to verify auth by checking our cookie
    context: ({ req }) => {
      // we check if the authorization headers exist and if the secret key exist
      if (
        req?.headers.authorization === undefined ||
        process.env.JWT_SECRET_KEY === undefined
      ) {
        // if not we return a void object
        return {};
      } else {
        try {
          // if it exist we get the token bearer by spliting the headers authorization
          const bearer = req.headers.authorization.split("Bearer ")[1];

          // and we return an object contaning the token bearer value
          return { token: bearer };
        } catch (e) {
          // if error we log error and return a void object
          console.log(e);
          return {};
        }
      }
    },
  });
};

export default createServer;
