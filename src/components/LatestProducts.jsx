import React from "react";
import ProductImage1 from "../assets/product1.jpg";
import ProductImage2 from "../assets/product2.jpg";
import ProductImage3 from "../assets/product3.jpg";
function LatestProducts() {
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
  ];
  return (
    <div className="max-w-360 mx-auto lg:px-8 px-5 py-10">
      <h2 className="text-green-400 text-4xl font-medium pb-10">
        Sản phẩm <span className="text-gray-700"> Mới nhất</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
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
  );
}

export default LatestProducts;
