/** @format */

import Navbar from "../components/NavbarWhite";
import Footer from "../components/Footer/Footer";

import Swiper from "../components/RulesAndFAQs/Swiper";
import WhyPlay from "../components/Home/WhyPlay";
import FAQs from "../components/RulesAndFAQs/FAQs";

const RulesAndFAQs = () => {
  return (
    <>
      <Navbar />
      <main>
        <Swiper />
        <WhyPlay />
        <FAQs />
      </main>
      <Footer />
    </>
  );
};

export default RulesAndFAQs;
