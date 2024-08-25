import { aboutus } from "../data";
import { motion } from "framer-motion";
export const AboutUs = () => {
  return (
    <div
      className="flex w-full justify-center flex-col mt-10 items-center"
      id="aboutUs"
    >
      <div className="flex flex-col text-2xl  items-center w-full">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-semibold">Sobre nós</h2>
          <div className="border-4 w-14 border-blue-600 rounded-lg"></div>
        </motion.div>
      </div>
      <div className="p-3 w full max-w-7xl mr-auto ml-auto mt-10 bg-green-900  text-white rounded-xl">
        {aboutus.map((item) => (
          <div className="flex flex-col  text-start items-center ">
            <motion.h3
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
              className="font-medium mt-5 text-lg"
            >
              {item.title}
            </motion.h3>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-[30rem]"
            >
              <img src={item.photo} className="w-full h-full" alt="" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="text-center"
            >
              <p>{item.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
