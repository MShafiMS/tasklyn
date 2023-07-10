import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";

interface Options {
  query: any;
  maxDepth?: number;
  variables?: {};
  authMode?: "AWS_IAM" | "AMAZON_COGNITO_USER_POOLS";
}

export function graphqlQuery<T = object>(options: Options) {
  const promise = API.graphql({
    query: options.query,
    variables: options.variables || {},
    authMode: options.authMode,
  }) as unknown as Promise<GraphQLResult<T>>;
  (promise as any).cancel = () => API.cancel(promise);

  return promise;
}
