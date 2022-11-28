/** @format */

import Hero from "./components/Hero";
import AppFeatures from "./components/AppFeatures";
import Swiper from "./components/Swiper";
import WhyPlay from "./components/WhyPlay";
import Mockups from "./components/Mockups";
import Instructions from "./components/Instructions";
import Invite from "./components/Invite";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <AppFeatures />
      <Swiper />
      <WhyPlay />
      <Mockups />
      <Instructions />
      <Invite />
    </main>
  );
};

export default HomePage;
