import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-80 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">
          Chào mừng bạn đến với chuỗi thương mại điện tử sử dụng MERN Stack
        </h2>
        <p className="text-sm">
          Đây là một dự án thương mại điện tử thực tế được xây dựng trên nền
          tảng MERN. Chúng ta sẽ phát triển toàn bộ hệ thống từng bước một bới
          TDNDEV.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default App;
