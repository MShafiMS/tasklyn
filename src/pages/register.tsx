import UnauthenticatedPage from "@TasklynAlias/UnAuthenticatedPage";
import ConfirmForm from "@TasklynAlias/components/ConfirmForm";
import AuthLayout from "@TasklynAlias/components/Layout/AuthLayout";
import SignUpForm from "@TasklynAlias/components/SignUpForm";
import { createUser } from "@TasklynAlias/lib/services/user.service";
import { ISignUpUser } from "@TasklynAlias/lib/types/types";
import { Auth } from "aws-amplify";
import { useState } from "react";

const Register = () => {
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (user: ISignUpUser) => {
    try {
      setLoading(true);
      const { userSub } = await Auth.signUp({
        username: user.email?.trim(),
        password: user.password?.trim(),
        attributes: {
          email: user.email?.trim(),
          name: `${user.firstName.trim()} ${user.lastName.trim()}`,
        },
      });
      await createUser({
        id: userSub,
        firstName: user.firstName.trim(),
        lastName: user.lastName.trim(),
        email: user.email.trim(),
      });
      setEmail(user.email);
      setPass(user.password);
      setConfirm(true);
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
      console.log(err?.message);
      setConfirm(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UnauthenticatedPage>
      <AuthLayout title="Welcome Aboard">
        <div>
          {confirm ? (
            <ConfirmForm email={email} pass={pass} />
          ) : (
            <SignUpForm onSubmit={onSubmit} loading={loading} error={error} />
          )}
        </div>
      </AuthLayout>
    </UnauthenticatedPage>
  );
};

export default Register;
