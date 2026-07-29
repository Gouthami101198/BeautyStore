import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Countdown from "../../components/Countdown/Countdown";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>

      <Navbar />

      <main className="home">

        <Hero />

        <Categories />

        <FeaturedProducts />

        <Countdown />

        <Newsletter />

      </main>

      <Footer />

    </>
  );
}

export default Home;