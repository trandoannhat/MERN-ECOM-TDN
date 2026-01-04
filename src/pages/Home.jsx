import React from "react";
import Header from "./../components/layouts/Header";
import Footer from "./../components/layouts/Footer";
import Hero from "./../components/Hero";
import FeatureProducts from "../components/FeatureProducts";
import LatestProducts from "../components/LatestProducts";
function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeatureProducts />
      <LatestProducts />
      <Footer />
    </div>
  );
}

export default Home;
