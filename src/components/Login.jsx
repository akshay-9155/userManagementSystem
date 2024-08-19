import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [haveAccount, setHaveAccount] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    role: "USER", // Default role
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
    const { name, email, password, city, role } = formData;
    if (haveAccount) {
      try {
        const response = await axios.post(`${BASE_URL}/auth/login`, {
          email,
          password,
        });
        toast.success(response.data.message);
        if (response.data.success) navigate("/");
      } catch (error) {
        toast.error(error?.response?.data?.message || "Internal Server Error");
      }
    } else {
      try {
        const response = await axios.post(`${BASE_URL}/auth/register`, {
          name,
          email,
          password,
          city,
          role,
        });
        toast.success(response.data.message);
        if (response.data.success) handleClick();
      } catch (error) {
        toast.error(error?.response?.data?.message || "Internal Server Error");
      }
    }
  };

  return (
    <div className="h-screen w-screen font-NewAmsterdam font-bold tracking-widest bg-[#222] flex items-center justify-center text-[#3d58a0]">
      <div className="containerr relative w-4/5 h-4/5 border-2 border-[#0128C0] shadow-[0_0_25px_#0144FA] overflow-hidden">
        <div
          className={`curved-shape absolute -top-[5px] border-2 border-[#00bfff] shadow-[0_0_25px_#00bfff] w-screen h-screen bg-gradient-to-tr from-[#26c6fb] via-[#00bfff] to-[#26c6fb] transition-all duration-[1.5s] ${
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
          <h2 className="text-[40px] uppercase tracking-widest font-extrabold text-center">
            {haveAccount ? "Login" : "Sign Up"}
          </h2>
          <form onSubmit={handleSubmit}>
            {!haveAccount && (
              <>
                <div className="input-box w-full relative mt-[25px] h-[50px]">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-full transition-all duration-300 bg-transparent pr-[25px] outline-none text-[16px] border-b-2 border-[#8697c4] font-extrabold peer focus:border-[#7091e6]"
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
                  <FaUser className="absolute top-1/2 right-0 transition-all duration-500 peer-focus:text-[#3e5fd6] peer-valid:text-[#3e5fd6]" />
                </div>
                <div className="input-box w-full relative mt-[25px] h-[50px]">
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full h-full transition-all duration-300 bg-transparent pr-[25px] outline-none text-[16px] border-b-2 border-[#8697c4] font-extrabold peer focus:border-[#7091e6]"
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
                  <FaUser className="absolute top-1/2 right-0 transition-all duration-500 peer-focus:text-[#3d52a0] peer-valid:text-[#3d52a0]" />
                </div>
              </>
            )}
            <div className="input-box w-full relative mt-[25px] h-[50px]">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-full transition-all duration-300 bg-transparent pr-[25px] outline-none text-[16px] border-b-2 border-[#8697c4] font-extrabold peer focus:border-[#7091e6]"
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
              <FaUser className="absolute top-1/2 right-0 transition-all duration-500 peer-focus:text-[#3d52a0] peer-valid:text-[#3d52a0]" />
            </div>
            <div className="input-box w-full relative mt-[25px] h-[50px]">
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-full transition-all duration-300 bg-transparent pr-[25px] outline-none text-[16px] border-b-2 border-[#8697c4] font-extrabold peer focus:border-[#7091e6]"
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
              <FaLock className="absolute top-1/2 right-0 transition-all duration-500 peer-focus:text-[#3d52a0] peer-valid:text-[#3d52a0]" />
            </div>

            {!haveAccount && (
              <div className="input-box relative mt-[25px] h-[45px] w-1/2">
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="role"
                      value="USER"
                      checked={formData.role === "USER"}
                      onChange={handleChange}
                      className="form-radio text-[#7091e6]  focus:ring-0 size-4"
                    />
                    <span className="text-[16px] font-extrabold text-[#8697c4]">
                      User
                    </span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="role"
                      value="ADMIN"
                      checked={formData.role === "ADMIN"}
                      onChange={handleChange}
                      className="form-radio text-[#7091e6]  focus:ring-0 size-4"
                    />
                    <span className="text-[16px] font-extrabold text-[#8697c4]">
                      Admin
                    </span>
                  </label>
                </div>
              </div>
            )}

            <div className="input-box w-full relative mt-[25px] h-[45px]">
              <button
                style={{ zIndex: 10 }}
                className="relative bg-transparent text-[#ede8f5] overflow-hidden w-full h-[45px] cursor-pointer rounded-2xl text-[16px] font-extrabold border-2 border-[#7091e6] before:content-[''] before:absolute before:-top-full before:left-0 before:bg-gradient-to-t from-[#25252b] via-[#7091e6] to-[#25252b] before:-z-10 before:h-[300%] before:w-full before:bg-slate-600 hover:before:top-0 before:transition-all duration-500"
                type="submit"
              >
                {haveAccount ? "Login" : "Register"}
              </button>
            </div>
          </form>
          <p className="mt-[20px] text-center text-[15px] font-medium">
            {haveAccount ? (
              <span className="text-[#7091e6]">
                Don't have an account?{" "}
                <button
                  className="font-extrabold hover:underline"
                  onClick={handleClick}
                >
                  Sign Up
                </button>
              </span>
            ) : (
              <span className="text-[#7091e6]">
                Already have an account?{" "}
                <button
                  className="font-extrabold hover:underline"
                  onClick={handleClick}
                >
                  Sign In
                </button>
              </span>
            )}
          </p>
        </div>

        <div
          className={`info-content text-[#135353] absolute top-0 w-1/2 h-full ${
            haveAccount
              ? "right-0 text-right pr-[40px] pb-[60px] pl-[250px]"
              : "left-0 text-left pr-[250px] pb-[60px] pl-[40px]"
          } flex  justify-center flex-col`}
        >
          <h2 className="text-[40px] leading-[1.3] font-bold font-mono">
            WELCOME BACK!
          </h2>
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
