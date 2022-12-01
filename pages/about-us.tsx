/** @format */

import Navbar from "../components/NavbarWhite";
import Footer from "../components/Footer/Footer";

import Intro from "../components/AboutUs/Intro";
import Founders from "../components/AboutUs/Founders";
import Head from "next/head";

const RulesAndFAQs = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <main>
        <Intro />
        <Founders />
        <Footer />
      </main>
    </>
  );
};

export default RulesAndFAQs;
