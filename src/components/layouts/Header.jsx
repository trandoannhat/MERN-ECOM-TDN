import React from "react";

function Header() {
  return (
    <div className="w-full flex justify-between bg-gray-200 px-5 py-3">
      <h1 className="text-xl">TDNDEV</h1>
      <ul className="flex space-x-3">
        <li>Trang chủ</li>
        <li>Nam</li>
        <li>Nữ</li>
        <li>Trẻ em</li>
      </ul>
    </div>
  );
}

export default Header;
