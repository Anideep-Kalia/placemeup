import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Admin/AdminHeader";
import loginimg from "../assests/Login.png";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from 'graphql-tag';
import { useDispatch } from "react-redux";
import { setAdminId } from "../redux/slices/collegeAdminSlice";

function LoginPage() {
  const { collegeName } = useParams(); // Get collegeName from URL params
  const dispatch = useDispatch();
  let collegen = decodeURIComponent(collegeName);

  const LOGIN_ADMIN = gql`
    mutation loginCollegeAdmin($password: String!, $adminId: String!) {
      loginCollegeAdmin(password: $password, adminId: $adminId) {
        id
        token
        adminId
      }
    }
  `;
  const [loginCollegeAdmin] = useMutation(LOGIN_ADMIN);


  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token-admin');
    if (token) {
      navigate(`/admin-dashboard`);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginCollegeAdmin({ variables: { adminId: email, password } });
      localStorage.setItem('token-admin', data.loginCollegeAdmin.token);
      dispatch(setAdminId(data.loginCollegeAdmin.adminId));
      navigate(`/admin-dashboard`);
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
    }
  };


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

              <button type="submit" className={`bg-[#FFC727] btn text-white px-4 py-2 rounded-md `}>
                Login
              </button>
            </form>            
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
 