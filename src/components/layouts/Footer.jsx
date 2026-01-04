import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="max-w-360 mx-auto lg:px-8 px-3">
      <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-3  bg-green-300 rounded-lg p-10">
        <div className="lg:pr-20">
          <Link>
            <span className="text-3xl text-white font-bold">TDN</span>
            <span className="text-3xl text-slate-800 font-bold">COM</span>
          </Link>
          <p className="text-gray-800 mt-2">
            Điểm đến cho những món thời trang thiết yếu hằng ngày của bạn
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-gray-800 font-bold mb-3">
            Liên kết nhanh
          </h2>
          <Link className="hover:underline">Đăng nhập</Link>
          <Link className="hover:underline">Đăng ký</Link>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl text-gray-800 font-bold mb-3">Liên hệ</h2>
          <Link className="hover:underline">+81.123.456.789</Link>
          <Link to={`mailto:support@example.com`} className="hover:underline">
            support@example.com
          </Link>
          <p>123 Ho Chi Minh, Viet Nam</p>
        </div>
      </div>
      <div className="text-sm text-center py-3">
        © {new Date().getFullYear()} TDN. Bảo lưu mọi quyền.
      </div>
    </div>
  );
}

export default Footer;
