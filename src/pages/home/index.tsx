import AuthenticatedPage from "@TasklynAlias/AuthenticatedPage";
import { Auth } from "aws-amplify";

const Home = () => {
  const handleSignOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };
  return (
    <AuthenticatedPage>
      <div>authenticated user</div>
      <button onClick={() => handleSignOut()} type="button">
        Sign out
      </button>
    </AuthenticatedPage>
  );
};

export default Home;
