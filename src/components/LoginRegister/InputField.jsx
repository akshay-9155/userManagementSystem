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
  <div className="input-box relative mt-6 h-12 md:h-14">
    <input
      name={name}
      value={value}
      onChange={onChange}
      className="w-full h-full transition-all duration-300 bg-transparent pr-10 outline-none text-sm md:text-base border-b-2 border-[#8697c4] font-extrabold peer focus:border-[#7091e6]"
      id={name}
      type={type}
      aria-label={label}
      required={required}
    />
    <label
      className="absolute left-0 transition-all text-[#3d52a0] font-bold duration-500 top-1/2 -translate-y-1/2 peer-focus:-top-1 peer-focus:text-[#7091e6] peer-valid:-top-1 peer-valid:text-[#7091e6]"
      htmlFor={name}
    >
      {label}
    </label>
    {icon}
  </div>
);

export default InputField;
