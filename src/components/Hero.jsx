import React from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/banner.jpg";

const Hero = () => {
  return (
    <div className="bg-slate-50">
      <div className="max-w-360 mx-auto lg:px-8 px-5">
        <div className="grid rid-cols-1 sm:grid-cols-2 items-center py-5 sm:py-20">
          {/* left box */}
          <div className="space-y-7 py-10 pr-0 sm:pr-20">
            <h2 className="lg:text-5xl text-3xl text-gray-700 font-bold sm:leading-14">
              Khám phá phong cách riêng cùng bộ sưu tập của chúng tôi.
            </h2>
            <p className="text-lg text-gray-800">
              Khám phá những sản phẩm cao cấp được tuyển chọn, nâng tầm phong
              cách sống của bạn. Chất lượng và phong cách hội tụ trong từng sản
              phẩm.
            </p>
            <Link className="bg-green-400 px-5 py-2 ms-3 text-md rounded-md text-gray-800">
              Đặt mua ngay
            </Link>
          </div>
          {/* right box */}
          <div className="relative pb-10">
            <img
              //className="rounded-2xl object-cover h-75 sm:h-125 relative w-full"
              src={Banner}
              alt="banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
