import UnauthenticatedPage from "@TasklynAlias/UnAuthenticatedPage";
import AuthLayout from "@TasklynAlias/components/Layout/AuthLayout";
import { Auth } from "aws-amplify";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiMail } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { ImSpinner6 } from "react-icons/im";

interface ISignIpUser {
  email: string;
  password: string;
}

const Login = () => {
  const [isShowPass, setIsShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignIpUser>();

  const onSubmit = async (user: ISignIpUser) => {
    const { email, password } = user;
    try {
      setLoading(true);
      await Auth.signIn(email, password);
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UnauthenticatedPage>
      <AuthLayout>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-[#161c2c] lg:w-[35vw] w-11/12 mx-auto"
        >
          <h1 className="text-5xl font-bold mb-7">Sign In</h1>
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
          <div className="w-full mb-14">
            <div className="flex justify-between">
              <p>Password</p>
              <Link href={"/reset"} className="font-semibold">
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={isShowPass ? "text" : "password"}
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                  minLength: {
                    value: 8,
                    message: "Password must be 8-32 characters long",
                  },
                  maxLength: {
                    value: 32,
                    message: "Password must be 8-32 characters long",
                  },
                })}
                placeholder={
                  errors.password?.type === "required"
                    ? errors.password.message
                    : "8-32 characters"
                }
                className={`p-3 bg-[#F4F2F2] rounded w-full font-medium outline-none ${
                  errors.password?.type === "required" &&
                  "placeholder:text-red-500/70"
                }`}
              />
              <button
                type="button"
                onClick={() => setIsShowPass(!isShowPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500"
              >
                {isShowPass ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
            {errors.password?.type === "minLength" && (
              <p className="text-red-500/90">{errors.password.message}</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-500/90">{errors.password.message}</p>
            )}
          </div>
          <p className="text-red-500/90">{error}</p>
          <button
            type="submit"
            disabled={loading}
            className="text-center w-full p-3 bg-[#F0AB20] rounded text-lg font-bold"
          >
            {loading ? (
              <ImSpinner6 size={28} className="animate-spin block mx-auto" />
            ) : (
              "Sign In"
            )}
          </button>
          <p className="text-lg mt-4 text-center">
            <span className="">Don’t have an account?</span>{" "}
            <Link href={"/register"} className="text-[#22C1DC] font-bold">
              Sign Up
            </Link>
          </p>
        </form>
      </AuthLayout>
    </UnauthenticatedPage>
  );
};

export default Login;
