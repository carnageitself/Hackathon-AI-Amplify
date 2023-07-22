import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { testimonials } from "../constants";

interface Testimonial {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

const FeedbackCard: React.FC<Testimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="bg-black p-10 rounded-3xl xs:w-[320px] w-full h-[50vh]"
  >
    <p className="text-white font-black text-[20px]">{testimonial}</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]"></p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-blue-100 text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  return (
    <div className={`mt-12 bg-[#181818] rounded-[20px]`}>
      <div
        className={`bg-[#121212] rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div>
          <p className={styles.sectionSubText}>AI Amplify</p>
          <h2 className={styles.sectionHeadText}>Projects</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
