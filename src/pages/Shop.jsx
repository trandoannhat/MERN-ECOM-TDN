import React from "react";
import Layout from "../components/layouts/Layout";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ProductImage1 from "../assets/product1.jpg";
import ProductImage2 from "../assets/product2.jpg";
import ProductImage3 from "../assets/product3.jpg";

function Shop() {
  const products = [
    {
      id: 1,
      name: "Sản phẩm 1",
      image: ProductImage1,
      price: 100.0,
      crossPrice: 150.0,
    },

    {
      id: 2,
      name: "Sản phẩm 2",
      image: ProductImage2,
      price: 200.0,
      crossPrice: 250.0,
    },
    {
      id: 3,
      name: "Sản phẩm 3",
      image: ProductImage3,
      price: 300.0,
      crossPrice: 430.0,
    },
    {
      id: 4,
      name: "Sản phẩm 4",
      image: ProductImage1,
      price: 400.0,
      crossPrice: 550.0,
    },
    {
      id: 5,
      name: "Sản phẩm 5",
      image: ProductImage2,
      price: 500.0,
      crossPrice: 650.0,
    },
    {
      id: 6,
      name: "Sản phẩm 6",
      image: ProductImage3,
      price: 300.0,
      crossPrice: 430.0,
    },
    {
      id: 7,
      name: "Sản phẩm 7",
      image: ProductImage1,
      price: 400.0,
      crossPrice: 550.0,
    },
    {
      id: 8,
      name: "Sản phẩm 8",
      image: ProductImage2,
      price: 500.0,
      crossPrice: 650.0,
    },
  ];

  return (
    <>
      <Layout>
        {/* Breadcrumb */}

        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="flex gap-x-1 items-center text-sm">
            <Link>Trang chủ</Link>
            <IoIosArrowForward />
            <Link className="font-bold">Cửa hàng</Link>
          </div>
        </div>

        {/* Title */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto">
          <div className="flex text-4xl text-green-400">Cửa hàng</div>
        </div>

        {/* Main container */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto">
          <div className="grid grid-cols-12 mt-5 gap-5">
            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-2 pb-5">
              <div className="flex justify-between items-center mb-3 border-b border-gray-200 pb-3">
                <span className="text-2xl font-bold">Bộ lọc</span>
                <span className="">Xóa</span>
              </div>
              {/* Category Filter */}
              <div className="font-bold pt-2 mb-2">Danh mục</div>

              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-400"
                />
                <span>Áo</span>
              </div>

              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-400"
                />
                <span>Quần</span>
              </div>

              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-400"
                />
                <span>Giày</span>
              </div>

              {/* Brand Filter */}
              <div className="font-bold pt-4 mb-2">Thương hiệu</div>

              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-400"
                />
                <span>Việt tiên</span>
              </div>

              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-400"
                />
                <span>May mười</span>
              </div>

              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-400"
                />
                <span>An phước</span>
              </div>

              {/* Price Range Filter */}
              <div className="font-bold pt-4 mb-2">Khoảng giá</div>

              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="radio"
                  className="w-4 h-4 border border-gray-400"
                />
                <span>Dưới 200</span>
              </div>

              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="radio"
                  className="w-4 h-4 border border-gray-400"
                />
                <span>200 - 500</span>
              </div>

              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="radio"
                  className="w-4 h-4 border border-gray-400"
                />
                <span>Trên 500</span>
              </div>
            </div>

            {/* products */}
            <div className="col-span-12 lg:col-span-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                {products &&
                  products.map((product) => {
                    return (
                      <div key={product.id}>
                        <div className="bg-slate-100 overflow-hidden rounded-lg mb-3">
                          <img
                            className="w-full object-cover h-95 duration-500 ease-in-out transition-transform hover:scale-110"
                            src={product.image}
                            alt=""
                          />
                        </div>
                        <h3 className="text-lg text-gray-800 font-semibold">
                          {product.name}
                        </h3>
                        <p className="text-base text-gray-700 font-semibold">
                          {product.price}
                          {"vnđ "}
                          <span className="line-through text-gray-500">
                            {" "}
                            {product.crossPrice}
                            {"vnđ"}
                          </span>
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Shop;
