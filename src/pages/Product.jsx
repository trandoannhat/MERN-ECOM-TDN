import Layout from "../components/layouts/Layout";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import ProductImage1 from "../assets/product1.jpg";
import ProductImage2 from "../assets/product2.jpg";
import ProductImage3 from "../assets/product3.jpg";
import { useEffect, useState } from "react";

function Product() {
  const gallery = [
    {
      id: 1,
      url: ProductImage1,
    },
    {
      id: 2,
      url: ProductImage2,
    },
    {
      id: 3,
      url: ProductImage3,
    },
  ];
  const [mainImage, setMainImage] = useState(null);
  const handleGallery = (item) => {
    setMainImage(item);
  };

  useEffect(() => {
    if (gallery) {
      setMainImage(gallery[0]);
    }
  }, []);

  return (
    <Layout>
      {/* Breadcrumb */}

      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex gap-x-1 items-center text-sm">
          <Link>Cửa hàng</Link>
          <IoIosArrowForward />
          <Link className="font-bold">Sản phẩm tốt cho Nam</Link>
        </div>
      </div>

      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-5 col-span-12">
            {/* Gallery */}
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-10 bg-slate-50">
                {/* Main Image */}
                <img
                  src={mainImage?.url}
                  className="w-full rounded-md"
                  alt=""
                />
              </div>
              <div className="col-span-2">
                {/* Small Image */}
                {gallery &&
                  gallery.map((item) => {
                    return (
                      <Link key={item.id} className="bg-slate-50 rounded-md">
                        <img
                          key={item.id}
                          onClick={() => handleGallery(item)}
                          src={item.url}
                          className="w-full"
                          alt=""
                        />
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 col-span-12">
            {/* Product Info */}
            <h2 className="font-bold text-2xl text-gray-800">
              Sản phẩm tốt cho Nam
            </h2>

            {/* Price */}
            <div className="font-bold text-lg mt-3">
              100.000vnđ{" "}
              <span className="text-gray-500 font-semibold line-through">
                (150.000vnđ)
              </span>
            </div>

            {/* Description */}
            <div className="text-base text-gray-500 mt-3">
              Khám phá những sản phẩm cao cấp được tuyển chọn, nâng tầm phong
              cách sống của bạn. Chất lượng và phong cách hội tụ trong từng sản
              phẩm.
            </div>
            {/* Sizes */}
            <div className="font-bold text-lg mt-3">Chọn kích thước</div>
            <div className="flex gap-x-2">
              <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">
                S
              </div>
              <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">
                M
              </div>
              <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">
                L
              </div>
              <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">
                XL
              </div>
            </div>
            <div className="mt-8 border-b border-gray-200 pb-10">
              <Link className="bg-green-400 px-5 py-3  text-md rounded-md text-gray-800">
                Thêm vào giỏ hàng
              </Link>
            </div>

            <div className="flex flex-col text-gray-500 mt-5">
              <p>100% Cotton</p>
              <p>Đảm bảo hoàn tiền</p>
              <p>Hỗ trợ thanh toán khi nhận hàng (COD)</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Product;
