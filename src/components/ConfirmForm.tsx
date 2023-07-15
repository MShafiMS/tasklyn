import { Auth } from "aws-amplify";
import Link from "next/link";
import { useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import { MdVerifiedUser } from "react-icons/md";
import OTPInput from "react-otp-input";

interface IProps {
  email: string;
  pass: string;
}

const ConfirmForm = ({ email, pass }: IProps) => {
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const confirmSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await Auth.confirmSignUp(email, code);
      // await Auth.signIn(email, pass);
      // navigate('/builder?newSite=true')
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
      <div className="text-[#161c2c] lg:w-[35vw] w-11/12 mx-auto">
        <div className="flex flex-col gap-4 items-center">
          <MdVerifiedUser
            size={130}
            className="text-green-700 drop-shadow-2xl"
          />
          <h1 className="text-3xl font-bold text-center">Verified!</h1>
          <p>You have successfully verified your account!</p>
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
        onSubmit={confirmSignUp}
        className="text-[#161c2c] lg:w-[35vw] w-11/12 mx-auto"
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

export default ConfirmForm;
