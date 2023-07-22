import React from "react";
import { styles } from "../styles";
// import Banner from "./Banner";
import CityCanvas from "../canvas/City";

const Hero: React.FC = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
        </div>

        <div>
            {/* <Banner/> */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Embrace <span className="text-[#915EFF]">Ai</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Where Imagination Meets&nbsp;
            <br className="sm:block hidden" />
            Reality.
          </p>
        </div>
      </div>

      <CityCanvas />
      
    </section>
  );
};

export default Hero;
