// import { motion, Variants } from "framer-motion";
// import { ReactNode } from "react";

// import { styles } from "../styles";
// import { staggerContainer } from "../utils/motion";

// interface StarWrapperProps {
//   idName: string;
//   children: ReactNode;
// }

// const StarWrapper: React.FC<StarWrapperProps> = ({ idName, children }: StarWrapperProps) => {
//   const containerVariants: Variants = staggerContainer();

//   return (
//     <motion.section
//       variants={containerVariants}
//       initial='hidden'
//       whileInView='show'
//       viewport={{ once: true, amount: 0.25 }}
//       className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
//     >
//       <span className='hash-span' id={idName}>
//         &nbsp;
//       </span>

//       {children}
//     </motion.section>
//   );
// };

// export default StarWrapper;
