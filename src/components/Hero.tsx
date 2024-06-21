import { HeroSlider } from "../constants";

const Hero = () => {
  return (
    <section id="home" className="w-full h-screen flex justify-center items-center bg-hero bg-cover">
      <img
       src={HeroSlider}
        alt="beergarden logo"
        className="mt-28"
      />
    </section>
  );
};

export default Hero;
