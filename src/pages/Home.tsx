import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import TrustedPlatform from "../components/TrustedPlatform/TrustedPlatform";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <HowItWorks />
      <TrustedPlatform />
    </>
  );
};
export default Home;
