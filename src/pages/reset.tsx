import UnauthenticatedPage from "@TasklynAlias/UnAuthenticatedPage";
import ConfirmResetForm from "@TasklynAlias/components/ConfirmResetForm";
import AuthLayout from "@TasklynAlias/components/Layout/AuthLayout";
import { Auth } from "aws-amplify";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiMail } from "react-icons/ci";
import { ImSpinner6 } from "react-icons/im";

interface IReset {
  email: string;
}

const Reset = () => {
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [email, setEmail] = useState("");
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<IReset>();

  const onSubmit = async (data: IReset) => {
    try {
      setLoading(true);
      await Auth.forgotPassword(data.email);
      setEmail(data.email);
      setConfirm(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UnauthenticatedPage>
      <AuthLayout title="Forgot Your Password?">
        {confirm ? (
          <ConfirmResetForm email={email} />
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-[#161c2c] w-[35vw] mx-auto"
          >
            <h1 className="text-5xl font-bold mb-7">Reset Password</h1>
            <div className="w-full mb-5">
              <p>Email</p>
              <div className="relative">
                <input
                  type="email"
                  placeholder={
                    errors.email?.type === "required"
                      ? errors.email.message
                      : "johndoe@gmail.com"
                  }
                  {...register("email", {
                    required: { value: true, message: "Email is required" },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`p-3 bg-[#F4F2F2] rounded w-full font-medium outline-none ${
                    errors.email?.type === "required" &&
                    "placeholder:text-red-500/70"
                  }`}
                />
                <CiMail className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
              </div>
              {errors.email?.type === "pattern" && (
                <p className="text-red-500/90">{errors.email.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="text-center w-full p-3 bg-[#F0AB20] rounded text-lg font-bold"
            >
              {loading ? (
                <ImSpinner6 size={28} className="animate-spin block mx-auto" />
              ) : (
                "Reset"
              )}
            </button>
            <p className="text-lg mt-4 text-center">
              <Link href={"/login"} className="font-bold">
                Cancel
              </Link>
            </p>
          </form>
        )}
      </AuthLayout>
    </UnauthenticatedPage>
  );
};

export default Reset;
