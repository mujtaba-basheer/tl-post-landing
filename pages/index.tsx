/** @format */

import Footer from "../components/Footer/Footer";
import Hero from "../components/Home/Hero";
import AppFeatures from "../components/Home/AppFeatures";
import Swiper from "../components/Home/Swiper";
import WhyPlay from "../components/Home/WhyPlay";
import Mockups from "../components/Home/Mockups";
import Instructions from "../components/Home/Instructions";
import Invite from "../components/Home/Invite";

const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
        <AppFeatures />
        <Swiper />
        <WhyPlay />
        <Mockups />
        <Instructions />
        <Invite />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
