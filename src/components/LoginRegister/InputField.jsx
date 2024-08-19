// LoginRegister/InputField.jsx
import React from "react";

const InputField = ({
  name,
  type,
  value,
  onChange,
  icon,
  label,
  required = true,
}) => (
  <div className="input-box w-full relative mt-[25px] h-[50px]">
    <input
      name={name}
      value={value}
      onChange={onChange}
      className="w-full h-full transition-all duration-300 bg-transparent pr-[25px] outline-none text-[16px] border-b-2 border-[#8697c4] font-extrabold peer focus:border-[#7091e6]"
      id={name}
      type={type}
      aria-label={label}
      required={required}
    />
    <label
      className="absolute left-0 transition-all font-bold duration-500 top-[50%] -translate-y-[50%] peer-focus:-top-[5px] peer-focus:text-[#3d52a0] peer-valid:-top-[5px] peer-valid:text-[#3d52a0]"
      htmlFor={name}
    >
      {label}
    </label>
    {icon}
  </div>
);

export default InputField;
