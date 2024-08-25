import { motion } from "framer-motion";
import { service } from "../data";
export const Service = () => {
  return (
    <div className="space-y-14 mt-10" id="service">
      <div className="flex flex-col text-2xl  items-center w-full">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-semibold">Serviços</h2>
          <div className="border-4 w-14 border-blue-600 rounded-lg"></div>
        </motion.div>
      </div>

      {service.map((item) =>
        item.id % 2 == 0 ? (
          <div
            key={item.id}
            className="flex  lg:flex-row flex-col w-full space-y-6 lg:space-y-0 lg:space-x-14 justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-[26rem] h-72 "
            >
              <img
                src={item.photo}
                alt="p1"
                className="bg-cover rounded-lg w-full h-full"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="mt-10"
            >
              <h3 className="text-xl font-semibold ">{item.title}</h3>
              <p className="text-lg w-full lg:w-80">{item.description}</p>
            </motion.div>
          </div>
        ) : (
          <div
            key={item.id}
            className="flex lg:flex-row flex-col-reverse w-full space-y-6 lg:space-y-0 lg:space-x-14 justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="mt-10"
            >
              <h3 className="text-xl font-semibold ">{item.title}</h3>
              <p className="text-lg w-full lg:w-80">{item.description}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-[26rem] h-72 "
            >
              <img
                src={item.photo}
                alt="p1"
                className="bg-cover rounded-lg w-full h-full"
              />
            </motion.div>
          </div>
        )
      )}
    </div>
  );
};
