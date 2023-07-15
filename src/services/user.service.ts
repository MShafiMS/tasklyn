import { getUserDetails } from "@TasklynAlias/graphql/queries";
import { GRAPHQL_AUTH_MODE, GraphQLQuery } from "@aws-amplify/api";
import { API, Auth } from "aws-amplify";
import { CreateUserDetailsInput, GetUserDetailsQuery } from "../API";
import { createUserDetails } from "../graphql/mutations";

export const createUser = async <T>(user: T) => {
  try {
    const { data } = await API.graphql<GraphQLQuery<CreateUserDetailsInput>>({
      query: createUserDetails,
      variables: { input: user },
      authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
    });
    if (!data) return;
    return data;
  } catch (error) {
    console.error("@user.service::createUser::error", error);
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const userAuth = await Auth.currentAuthenticatedUser();

    const { data } = await API.graphql<GraphQLQuery<GetUserDetailsQuery>>({
      query: getUserDetails,
      variables: {
        id:
          userAuth?.attributes?.sub ||
          userAuth?.signInUserSession?.idToken?.payload?.sub,
      },
    });
    const user = data?.getUserDetails;
    return user;
  } catch (error) {
    console.error("@user.service::getUserById::error", error);
    throw error;
  }
};
