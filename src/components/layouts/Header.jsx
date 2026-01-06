import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
function Header() {
  return (
    <header className="shadow">
      <div className="bg-green-200">
        <div className="text-sm max-w-360 mx-auto py-1 lg:px-8 px-5">
          Miễn phí giao hàng cho đơn hàng đầu tiên của bạn!
        </div>
      </div>
      <div className="max-w-360 mx-auto lg:py-6 py-3 lg:px-8 px-5 flex justify-between items-center">
        <Link to={"/"}>
          <span className="text-3xl text-green-500 font-bold">TDN</span>
          <span className="text-3xl text-slate-800 font-bold">COM</span>
        </Link>
        <nav className="text-lg hidden text-gray-800 space-x-5 sm:flex items-center">
          <Link className=" hover:text-green-500 " to={"/"}>
            Trang chủ
          </Link>
          <Link className=" hover:text-green-500 " to={"/shop"}>
            Nam
          </Link>
          <Link className=" hover:text-green-500 " to={"/shop"}>
            Nữ
          </Link>
          <Link className=" hover:text-green-500 " to={"/shop"}>
            Trẻ em
          </Link>
          <Link className="relative">
            <span className="bg-red-400 text-sm rounded-[50%] flex justify-center items-center text-white absolute left-2 w-6 h-6 -top-6.5">
              0
            </span>
            <IoCartOutline className="mt-1" />
          </Link>
          <Link className="bg-green-400 px-5 py-2 ms-3 text-md rounded-md text-gray-800">
            Đăng nhập
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
