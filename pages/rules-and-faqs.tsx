/** @format */

import Navbar from "../components/NavbarWhite";
import Footer from "../components/Footer/Footer";

import Swiper from "../components/RulesAndFAQs/Swiper";
import WhyPlay from "../components/Home/WhyPlay";
import FAQs from "../components/RulesAndFAQs/FAQs";
import Head from "next/head";

const RulesAndFAQs = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
