import React from "react";
import Layout from "../components/layouts/Layout";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ProductImg from "../assets/product1.jpg";

function Cart() {
  return (
    <Layout>
      {/* Breadcrumb */}

      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex gap-x-1 items-center text-sm">
          <Link>Trang chủ</Link>
          <IoIosArrowForward />
          <Link className="font-bold">Giỏ hàng</Link>
        </div>
      </div>

      {/* Title */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto">
        <div className="flex text-4xl text-green-400">Cart</div>
      </div>

      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="grid lg:grid-cols-12 gap-5">
          <div className="lg:col-span-9 col-span-12">
            {/* Cart Items */}
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left">Sản phẩm</th>
                  <th className="px-3 py-2 text-center">Số lượng</th>
                  <th className="px-3 py-2 text-center">Tổng cộng</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="py-3 text-left">
                    <div className="flex gap-4">
                      <div className="bg-slate-50 p-2 rounded-md">
                        <img src={ProductImg} className="w-15" alt="" />
                      </div>

                      <div className="flex flex-col">
                        <h2 className="text-gray-800 font-semibold">
                          Váy ngắn thời trang cao cấp
                        </h2>
                        <div className="flex gap-3 items-center pt-3">
                          <div className="text-gray-500 font-semibold">
                            100.000
                          </div>
                          <div className="bg-gray-300 flex justify-center items-center px-2 py-1 rounded-md">
                            XL
                          </div>
                        </div>
                        <Link className="text-red-400 text-sm mt-3">
                          Xóa SP
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-center align-top">
                    <div className="flex w-25 rounded-md  mx-auto items-center justify-center px-2 py-2 border border-gray-200">
                      <div className="w-5">-</div>
                      <div className="w-10">5</div>
                      <div className="w-5">+</div>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-center align-top">500.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="lg:col-span-3 col-span-12">
            <div className="bg-gray-50 rounded-md px-5 py-3">
              <h2 className="font-semibold text-gray-800 border-b border-gray-200 bp-3 mb-3">
                Tổng cộng
              </h2>
              <div className="flex justify-between">
                <div className="text-gray-800">Tạm tính</div>
                <div className="text-gray-800">500.000</div>
              </div>
              <div className="flex pt-3">
                <Link className="bg-green-400 px-5 py-2.5 w-full text-center text-md rounded-md text-gray-800 hover:bg-gray-900 hover:text-white">
                  Tiến hành thanh toán
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
