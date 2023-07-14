import { GRAPHQL_AUTH_MODE, GraphQLQuery } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { CreateUserDetailsInput } from "../API";
import { createUserDetails } from "../graphql/mutations";

export const createUser = async <T>(user: T) => {
  console.log(user);
  try {
    const { data } = await API.graphql<GraphQLQuery<CreateUserDetailsInput>>({
      query: createUserDetails,
      variables: { input: user },
      authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
    });
    if (!data) return;
    console.log(data);
    return data;
  } catch (error) {
    console.error("@user.service::createUser::error", error);
    throw error;
  }
};
