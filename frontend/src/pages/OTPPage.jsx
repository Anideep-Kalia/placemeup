import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from '../redux/hooks';
import Header from "../components/Header";
import { useParams } from "react-router-dom";

function OTPPage() {

    const { name, email, collegeName } = useAppSelector((s) => s.register);
    console.log({name, email, collegeName })

  const navigate = useNavigate();
  const [otp, setOTP] = useState('');
  const handleOTPSubmit = (e) => {
    e.preventDefault();
    // Implement your OTP verification logic here
    console.log("Verifying OTP:", otp, email);
    // Example: Redirect to dashboard after OTP verification
    navigate("/user-dashboard");
  };

  return (
    <>
      <Header />
      <div className="w-full flex flex-col justify-center items-center h-[87.7vh] bg-[#FFC727] ">
        <div className="rounded-xl p-8 bg-white shadow-lg w-[30rem]">
          <h1 className="text-4xl font-bold mb-4">Enter OTP</h1>
          <p className="text-[#737373]  text-lg ">An OTP has been sent to {email}</p>
          <p className="text-[#737373] mb-6 text-lg ">Please enter it below: </p>
          <form onSubmit={handleOTPSubmit}>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              placeholder="Enter OTP"
              className="w-full p-2 mb-4 border rounded-md"
            />
            <div className=" flex fle-row items-center justify-start gap-2 mb-2 rounded-xl">
            <input type="checkbox" className="w-4 h-4"/>

            <h1>Remember Me</h1>
            </div>
            
            <button type="submit" className="bg-[#FFC727] text-white btn px-4 py-2 rounded-md">Verify OTP</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default OTPPage;
