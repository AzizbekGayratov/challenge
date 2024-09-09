import React, { useState, useRef } from "react";

const OTPInput = ({ length, onChangeOTP }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < length - 1 && value) {
        inputRefs.current[index + 1].focus();
      }
      onChangeOTP(newOtp.join(""));
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    if (paste.length === length && /^\d+$/.test(paste)) {
      const newOtp = paste.split("");
      setOtp(newOtp);
      onChangeOTP(paste);
      inputRefs.current[length - 1].focus();
    }
  };

  return (
    <div onPaste={handlePaste} style={{ display: "flex", gap: "10px" }}>
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleBackspace(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          className="w-10 h-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      ))}
    </div>
  );
};

export default OTPInput;
