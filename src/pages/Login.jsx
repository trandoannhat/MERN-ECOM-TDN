import React from "react";
import Layout from "../components/layouts/Layout";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Layout>
      <div className="bg-gray-200 lg:px-8 px-5 w-full flex justify-center items-center py-30 mb-10">
        {/* Login Form */}
        <div className="max-w-md w-full  rounded-md px-8 py-7  shadow-md bg-white">
          <h1 className="text-2xl text-gray-800 font-bold text-center">
            Đăng nhập
          </h1>
          <form className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-800">Email</label>
              <input
                type="text"
                placeholder="Nhập Email"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-800">Mật khẩu</label>
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
            </div>
            <div className="flex flex-col space-y-2 pt-3">
              <Link className="bg-green-400 px-5 py-2 w-full text-md rounded-md text-gray-800 text-center  hover:bg-gray-900 hover:text-white">
                Đăng nhập
              </Link>
            </div>

            <div className="text-center text-sm text-gray-800">
              Chưa có tài khoản?{" "}
              <Link to={`/register`} className="hover:underline">
                Đăng ký
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
