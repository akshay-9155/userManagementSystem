import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import axios from "axios";
const Login = () => {
  const [haveAccount, setHaveAccount] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    city: "",
  });
  const handleClick = () => {
    setHaveAccount((prevVal) => !prevVal);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password, city } = formData;
    if (haveAccount) {
      try {
        const response = await axios.post(
          `${USER_API_ENDPOINT}/login`,
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        // toast.success(response.data.message);
        // // set LoggedInUser in store
        // dispatch(getLoggedInUser(response?.data?.user));
        // if (response.data.success) navigate("/");
        console.log(response);
      } catch (error) {
        console.log(error);
        // toast.error(error?.response?.data?.message || "Internal Server Error");
      }
    } else {
      try {
        const response = await axios.post(
          `${USER_API_ENDPOINT}/register`,
          {
            name,
            username,
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        // toast.success(response.data.message);
        console.log(response);
        if (response.data.success) handleClick();
      } catch (error) {
        console.log(error);
        // toast.error(error?.response?.data?.message || "Internal Server Error");
      }
    }
  };
  return (
    <div className="h-screen w-screen bg-[#ede8f5] flex items-center justify-center text-[#3d58a0]">
      <div className="containerr relative w-4/5 h-4/5 border-2 border-[#7091e6] shadow-[0_0_25px_#7091e6] overflow-hidden">
        <div
          className={`curved-shape absolute -top-[5px] w-screen h-screen bg-gradient-to-tr from-[#7091e6] via-[#4f7beb] to-[#7091e6] transition-all duration-[1.5s] ${
            haveAccount
              ? "rotate-[10deg] skew-y-[40deg] origin-bottom-right right-0"
              : "rotate-[-10deg] skew-y-[140deg] origin-top-left right-[-180px]"
          } `}
        ></div>
        <div
          className={`form-box Login absolute top-0 ${
            haveAccount ? "left-0" : "right-0"
          } px-[40px] w-1/2 h-full flex flex-col justify-center`}
        >
          <h2 className="text-[32px] text-center">
            {haveAccount ? "Login" : "Sign Up"}
          </h2>
          <form onSubmit={handleSubmit}>
            {!haveAccount && (
              <div
                className={`input-box w-full relative ${
                  haveAccount ? "mt-[25px] h-[50px]" : "mt-[25px] h-[50px]"
                }`}
              >
                <input
                  name="username"
                  value={formData.name}
                  onChange={handleChange}
                  className=" w-full h-full transition-all duration-300 bg-transparent pr-[25px] outline-none text-[16px] border-b-2 border-[#8697c4] font-extrabold peer focus:border-[#7091e6]"
                  id="name"
                  type="text"
                  required
                />
                <label
                  className="absolute left-0 transition-all font-bold duration-500 top-[50%] -translate-y-[50%] peer-focus:-top-[5px] peer-focus:text-[#3e5fd6] peer-valid:-top-[5px] peer-valid:text-[#3e5fd6]"
                  htmlFor="name"
                >
                  Name
                </label>
                <FaUser className=" absolute top-1/2 right-0 transition-all duration-500 peer-focus:text-[#3e5fd6] peer-valid:text-[#3e5fd6]" />
              </div>
            )}
            <div
              className={`input-box w-full relative ${
                haveAccount ? "mt-[25px] h-[50px]" : "mt-[25px] h-[50px]"
              }`}
            >
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className=" w-full h-full transition-all duration-300 bg-transparent pr-[25px] outline-none text-[16px] border-b-2 border-[#8697c4] font-extrabold peer focus:border-[#7091e6]"
                id="email"
                type="email"
                required
              />
              <label
                className="absolute left-0 transition-all font-bold duration-500 top-[50%] -translate-y-[50%] peer-focus:-top-[5px] peer-focus:text-[#3d52a0] peer-valid:-top-[5px] peer-valid:text-[#3d52a0]"
                htmlFor="email"
              >
                Email
              </label>
              <FaUser className=" absolute top-1/2 right-0 transition-all duration-500 peer-focus:text-[#3d52a0] peer-valid:text-[#3d52a0]" />
            </div>
            <div
              className={`input-box w-full relative ${
                haveAccount ? "mt-[25px] h-[50px]" : "mt-[25px] h-[50px]"
              }`}
            >
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                className=" w-full h-full transition-all duration-300 bg-transparent pr-[25px] outline-none text-[16px] border-b-2 border-[#8697c4] font-extrabold peer focus:border-[#7091e6]"
                id="password"
                type="password"
                required
              />
              <label
                className="absolute left-0 transition-all font-bold duration-500 top-[50%] -translate-y-[50%] peer-focus:-top-[5px] peer-focus:text-[#3d52a0] peer-valid:-top-[5px] peer-valid:text-[#3d52a0]"
                htmlFor="password"
              >
                Password
              </label>
              <FaLock className=" absolute top-1/2 right-0 transition-all duration-500 peer-focus:text-[#3d52a0] peer-valid:text-[#3d52a0]" />
            </div>
            {!haveAccount && (
              <div
                className={`input-box w-full relative ${
                  haveAccount ? "mt-[25px] h-[50px]" : "mt-[25px] h-[50px]"
                }`}
              >
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className=" w-full h-full transition-all duration-300 bg-transparent pr-[25px] outline-none text-[16px] border-b-2 border-[#8697c4] font-extrabold peer focus:border-[#7091e6]"
                  id="city"
                  type="text"
                  required
                />
                <label
                  className="absolute left-0 transition-all font-bold duration-500 top-[50%] -translate-y-[50%] peer-focus:-top-[5px] peer-focus:text-[#3d52a0] peer-valid:-top-[5px] peer-valid:text-[#3d52a0]"
                  htmlFor="city"
                >
                  City
                </label>
                <FaUser className=" absolute top-1/2 right-0 transition-all duration-500 peer-focus:text-[#3d52a0] peer-valid:text-[#3d52a0]" />
              </div>
            )}
            <div
              className={`input-box w-full relative ${
                haveAccount ? "mt-[25px] h-[50px]" : "mt-[25px] h-[45px]"
              }`}
            >
              <button
                style={{
                  zIndex: 10,
                }}
                className="relative bg-transparent text-[#ede8f5] overflow-hidden w-full h-[45px] cursor-pointer rounded-2xl text-[16px] font-extrabold border-2 border-[#7091e6] before:content-[''] before:absolute before:-top-full before:left-0 before:bg-gradient-to-t from-[#25252b] via-[#7091e6] to-[#25252b] before:-z-10 before:h-[300%] before:w-full before:bg-slate-600 hover:before:top-0 before:transition-all duration-500"
                type="submit"
              >
                {haveAccount ? "Login" : "Register"}
              </button>
            </div>
            <div className="reg-link text-[14px] text-center mt-[20px]">
              <p>
                {haveAccount
                  ? "Don't have an account ? "
                  : "Already have an account ? "}
                <a
                  className="Signup text-[#7091e6] font-extrabold hover:underline"
                  href="#"
                  onClick={handleClick}
                >
                  {haveAccount ? "Sign Up" : "Sign In"}
                </a>
              </p>
            </div>
          </form>
        </div>
        <div
          className={`info-content text-[#ede8f5] absolute top-0 w-1/2 h-full ${
            haveAccount
              ? "right-0 text-right pr-[40px] pb-[60px] pl-[250px]"
              : "left-0 text-left pr-[250px] pb-[60px] pl-[40px]"
          } flex  justify-center flex-col`}
        >
          <h2 className="text-[40px] leading-[1.3]">WELCOME BACK!</h2>
          <p className="text-[16px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
            inventore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
