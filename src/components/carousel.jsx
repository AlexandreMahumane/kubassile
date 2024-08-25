import React from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { slides } from "../data";
import "swiper/css";
import { motion } from "framer-motion";
export const Carousel = () => {
  register();
  return (
    <div className="relative w-full h-screen">
      <Swiper
        autoplay
        loop={true}
        direction="horizontal"
        slidesPerView={1}
        className="relative w-full h-screen"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full">
              <img
                src={item.slide}
                alt="Slide"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-blue-800 space-y-5 bg-opacity-75 text-center p-6 w-80 h-80 shadow-lg">
          <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold  text-white"
          >
            Kubassile Serviços LDA
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-2  text-xl text-white"
          >
            Kubassile Serviços LDA é uma empresa de limpeza geral de altissima
            qualidade!
          </motion.p>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="space-x-5 flex flex-wrap text-lg  justify-center w-full text-white"
          >
            <a
              className="p-2 text-white w-28 border-4 border-white"
              href="#service"
            >
              Serviços
            </a>
            <a
              href="#contacts"
              className="p-2 w-28  border-4 border-yellow-500"
            >
              Contactos
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
