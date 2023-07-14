import { ISignUpUser } from "@TasklynAlias/lib/types/types";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiMail, CiUser } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { ImSpinner6 } from "react-icons/im";

interface IProps {
  onSubmit: (user: ISignUpUser) => void;
  loading: boolean;
  error?: string;
}
const SignUpForm = ({ onSubmit, loading, error }: IProps) => {
  const [isShowPass, setIsShowPass] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignUpUser>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-[#161c2c] w-[35vw] mx-auto"
    >
      <h1 className="text-5xl font-bold mb-7">Create Account</h1>
      <div className="flex gap-6 items-center w-full mb-5">
        <div className="w-full">
          <p>First Name</p>
          <div className="relative">
            <input
              type="text"
              placeholder={
                errors.firstName?.type === "required"
                  ? errors.firstName.message
                  : "John"
              }
              {...register("firstName", {
                required: { value: true, message: "First name is required" },
              })}
              className={`p-3 bg-[#F4F2F2] rounded w-full font-medium outline-none ${
                errors.firstName?.type === "required" &&
                "placeholder:text-red-500/70"
              }`}
            />
            <CiUser className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
          </div>
        </div>
        <div className="w-full">
          <p>Last Name</p>
          <div className="relative">
            <input
              type="text"
              placeholder={
                errors.lastName?.type === "required"
                  ? errors.lastName.message
                  : "Doe"
              }
              {...register("lastName", {
                required: { value: true, message: "Last name is required" },
              })}
              className={`p-3 bg-[#F4F2F2] rounded w-full font-medium outline-none ${
                errors.lastName?.type === "required" &&
                "placeholder:text-red-500/70"
              }`}
            />
            <CiUser className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
          </div>
        </div>
      </div>
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
              errors.email?.type === "required" && "placeholder:text-red-500/70"
            }`}
          />
          <CiMail className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
        </div>
        {errors.email?.type === "pattern" && (
          <p className="text-red-500/90">{errors.email.message}</p>
        )}
      </div>
      <div className="w-full mb-14">
        <p>Password</p>
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
            onMouseDown={() => setIsShowPass(true)}
            onMouseUp={() => setIsShowPass(false)}
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
          "Sign Up"
        )}
      </button>
      <p className="text-lg mt-4 text-center">
        <span className="">Already have an account?</span>{" "}
        <Link href={"/login"} className="text-[#22C1DC] font-bold">
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
