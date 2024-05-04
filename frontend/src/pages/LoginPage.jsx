import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import loginimg from "../assests/Login.png";
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

function LoginPage() {
  const { collegeName } = useParams(); // Get collegeName from URL params
  let collegen = decodeURIComponent(collegeName);

  const FETCH_COLLEGE_DOMAIN = gql`
    query {
      getCollegeDomain(college: "${collegen}")
    }
  `;
  const { loading, data } = useQuery(FETCH_COLLEGE_DOMAIN);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log("Logging in with:", { collegeName, email, password });
    // Example: Redirect to dashboard after login
    navigate(`/user-dashboard`);
  };

  useEffect(() => {
    const isValidEmail = email.endsWith(data?.getCollegeDomain);
    const isEmailFilled = email.trim() !== '';
    const isPasswordFilled = password.trim() !== '';

    setIsFormValid(isValidEmail && isEmailFilled && isPasswordFilled);
  }, [email]);

  return (
    <>
      <Header />
      <div className="w-full flex flex-col justify-center items-center h-[87.7vh] bg-[#FFC727] ">
        <div className="rounded-xl w-[60%] h-[90%] flex flex-row justify-evenly items-center shadow-xl bg-white">
          <div className="flex flex-col items-center justify-center rounded-xl shadow-md py-4 px-3 h-[32rem] bg-white w-[28rem]">
            <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
            <h3 className="text-xl text-[#737373] mb-8">Please enter the login details below</h3>
            <form onSubmit={handleLogin} className="flex flex-col items-center w-full">
              
              <div className="mb-3 relative w-full">
                <h1 htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </h1>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="mt-2 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-3 relative w-full">
                <h1 htmlFor="college" className="block text-sm font-medium text-gray-700">
                  College Name
                </h1>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={collegen}
                  disabled
                  className="mt-2 p-2 border rounded-md w-full cursor-not-allowed opacity-50"
                />
              </div>


              <div className="mb-4 relative w-full">
                <h1 htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </h1>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter the password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-2 p-2 border rounded-md w-full"
                />
              </div>

              <button type="submit" className={`bg-[#FFC727] btn text-white px-4 py-2 rounded-md ${!isFormValid ? "opacity-50 cursor-not-allowed":""}`} disabled={!isFormValid}>
                Login
              </button>
            </form>
            <p className="mt-8 text-base font-medium">Don't have an account? <NavLink className={`text-[#FFC727] hover:underline`} to={`/register/${collegeName}`}>Register</NavLink> </p>
            
          </div>
          <div className="">
            <img src={loginimg} className="w-[25rem] h-[30rem]" alt="login" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
