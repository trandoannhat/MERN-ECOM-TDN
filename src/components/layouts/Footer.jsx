import React from "react";

function Footer() {
  return (
    <div className="py-3 bg-gray-200">
      <p className="text-center">
        © {new Date().getFullYear()} TDNDEV. Mọi quyền được bảo lưu.
      </p>
    </div>
  );
}

export default Footer;
