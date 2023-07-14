import { Auth } from "aws-amplify";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { ImSpinner6 } from "react-icons/im";
import { MdVerifiedUser } from "react-icons/md";
import OTPInput from "react-otp-input";

interface IProps {
  email: string;
}
interface INew {
  password: string;
}

const ConfirmResetForm = ({ email }: IProps) => {
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<INew>();

  const conFirmReset = async (data: INew) => {
    try {
      setLoading(true);
      await Auth.forgotPasswordSubmit(email, code, data.password);
      setVerified(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (codes: any) => setCode(codes);
  if (verified) {
    return (
      <div className="text-[#161c2c] w-[35vw] mx-auto">
        <div className="flex flex-col gap-4 items-center">
          <MdVerifiedUser
            size={130}
            className="text-green-700 drop-shadow-2xl"
          />
          <h1 className="text-3xl font-bold text-center">Success!</h1>
          <p>Your password changed successfully!</p>
          <Link
            href={"/login"}
            className="text-center w-8/12 p-3 bg-[#F0AB20] rounded text-lg font-bold"
          >
            Login
          </Link>
        </div>
      </div>
    );
  } else
    return (
      <form
        onSubmit={handleSubmit(conFirmReset)}
        className="text-[#161c2c] w-[35vw] mx-auto"
      >
        <h1 className="text-5xl font-bold mb-7 text-center">
          OTP Verification
        </h1>
        <p className="text-lg mb-7 text-center bg-[#161c2c]/10 py-2 rounded-lg w-10/12 mx-auto">
          We have sent a verification code to your email -{" "}
          {email || "example@email.com"}
        </p>
        <div className="w-full flex justify-center mb-8">
          <OTPInput
            value={code}
            onChange={handleChange}
            numInputs={6}
            renderSeparator={<span className="mx-3" />}
            renderInput={(props) => <input {...props} />}
            shouldAutoFocus
            inputStyle={{
              border: "1px solid transparent",
              backgroundColor: "#F4F2F2",
              borderRadius: "8px",
              width: "50px",
              height: "50px",
              fontSize: "18px",
              color: "#000",
              fontWeight: "400",
              outline: "none",
            }}
          />
        </div>
        <div className="w-10/12 mx-auto mb-14">
          <p>New Password</p>
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
        <p className="text-red-500 text-center">{error}</p>
        <button
          type="submit"
          disabled={loading}
          className="text-center w-8/12 mx-auto block p-3 bg-[#F0AB20] rounded text-lg font-bold"
        >
          {loading ? (
            <ImSpinner6 size={28} className="animate-spin block mx-auto" />
          ) : (
            "Verify"
          )}
        </button>
      </form>
    );
};

export default ConfirmResetForm;
