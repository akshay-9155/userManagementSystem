// LoginRegister/RoleSelection.jsx
import React from "react";

const RoleSelection = ({ role, onChange }) => (
  <div className="input-box relative mt-[25px] h-[45px] w-1/2">
    <div className="flex items-center space-x-4">
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="role"
          value="USER"
          checked={role === "USER"}
          onChange={onChange}
          className="form-radio text-[#7091e6] focus:ring-0 size-4"
        />
        <span className="text-[16px] font-extrabold text-[#8697c4]">User</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="role"
          value="ADMIN"
          checked={role === "ADMIN"}
          onChange={onChange}
          className="form-radio text-[#7091e6] focus:ring-0 size-4"
        />
        <span className="text-[16px] font-extrabold text-[#8697c4]">Admin</span>
      </label>
    </div>
  </div>
);

export default RoleSelection;
