/** @format */

import Navbar from "../components/NavbarWhite";
import Footer from "../components/Footer/Footer";

import Swiper from "../components/RulesAndFAQs/Swiper";
import FAQs from "../components/RulesAndFAQs/FAQs";

const RulesAndFAQs = () => {
  return (
    <>
      <Navbar />
      <main>
        <Swiper />
        <FAQs />
        <Footer />
      </main>
    </>
  );
};

export default RulesAndFAQs;
