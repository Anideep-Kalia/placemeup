import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import loginimg from "../assests/Login.png";

function RegisterPage() {
  const { collegeName } = useParams(); // Get collegeName from URL params
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [rollno, setRollNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // Array of predefined college names
  const predefinedNames = [
    { name: "NIT Kurushetra", link: "/register/NITK", emailFormat: "@nitk.ac.in" },
    { name: "NIT Meghalaya", link: "/register/NITM", emailFormat: "@nitm.ac.in" }
  ];

  // Find the predefined name object that matches the collegeName
  const selectedCollege = predefinedNames.find(item => item.link === `/register/${collegeName}`);
  const handleEmailBlur = () => {
    const isValid = email.endsWith(selectedCollege?.emailFormat);
    if (!isValid) {
      setEmailError(`Email must end with ${selectedCollege?.emailFormat}`);
    } else {
      setEmailError('');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log("Logging in with:", { collegeName, email, password });
    // Example: Redirect to dashboard after login
    navigate(`/otppage/${collegeName}/${email}`);
  };

  useEffect(() => {
    const isValidEmail = email.endsWith(selectedCollege?.emailFormat);
    const isEmailFilled = email.trim() !== '';
    const isNameFilled = name.trim() !== '';
    const isPasswordFilled = password.trim() !== '';
    const isConfirmpassFilled = confirmPass.trim() !== '';

    setIsFormValid(isValidEmail && isEmailFilled && isPasswordFilled && isNameFilled && isConfirmpassFilled);
  }, [email, selectedCollege]);

  return (
    <>
      <Header />
      <div className="w-full flex flex-col justify-center  items-center h-[87.7vh] bg-[#FFC727] ">
        <div className="rounded-xl w-[66%] h-[96%] flex flex-row gap-10 justify-evenly items-center shadow-xl bg-white">
          <div className="flex flex-col items-center justify-center rounded-xl  py-4 px-2 h-full bg-white w-[28rem]">
            <h1 className="text-2xl font-bold mb-1">Welcome to PlaceMeUP</h1>
            <h3 className="text-lg text-[#737373] mb-3">Please enter the details below to get started</h3>
            <form onSubmit={handleLogin} className="flex flex-col items-center w-full">
            <div className="mb-2 relative w-full">
                <h1 htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </h1>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  onBlur={handleEmailBlur}
                  placeholder="Enter your email"
                  className="mt-2 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-2 relative w-full">
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
                  onBlur={handleEmailBlur}
                  placeholder="Enter your email"
                  className="mt-2 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-2 relative w-full">
                <h1 htmlFor="college" className="block text-sm font-medium text-gray-700">
                  College Name
                </h1>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={selectedCollege.name }
                  disabled
                  className="mt-2 p-2 border rounded-md w-full cursor-not-allowed opacity-50"
                />
              </div>


              <div className="mb-2 relative w-full">
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

              <div className="mb-4 relative w-full">
                <h1 htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </h1>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Re-enter the password"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  required
                  className="mt-2 p-2 border rounded-md w-full"
                />
              </div>

              <button type="submit" className={`bg-[#FFC727] btn text-white px-4 py-2 rounded-md ${!isFormValid ? "opacity-50 cursor-not-allowed":""}`} disabled={!isFormValid}>
                Register
              </button>
            </form>
            <p className="text-base font-medium mt-8">Already have an account? <NavLink className={`text-[#FFC727] hover:underline`} to={`/login/${collegeName}`}>Login</NavLink></p>
          </div>
          <div className="">
            <img src={loginimg} className="w-[30rem] h-[30rem]" alt="login" />
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
