import Hero from "./../components/Hero";
import FeatureProducts from "../components/FeatureProducts";
import LatestProducts from "../components/LatestProducts";
import Layout from "../components/layouts/Layout";
function Home() {
  return (
    <Layout>
      <Hero />
      <FeatureProducts />
      <LatestProducts />
    </Layout>
  );
}

export default Home;
