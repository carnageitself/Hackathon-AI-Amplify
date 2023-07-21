import React from "react";
import { styles } from "../styles";
import CityCanvas from "../canvas/City";
// import { ComputersCanvas } from "../canvas";

const Hero: React.FC = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Yash</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces&nbsp;
            <br className="sm:block hidden" />
            and web applications
          </p>
        </div>
      </div>

      <CityCanvas />
    </section>
  );
};

export default Hero;
