"use client";

import React from "react";
import CardComponent from "./CardComponent";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CardContainerComponent = ({movies, label }) => {
  
  return (
    <div className="mt-5 w-full ">
      <p className="text-white font-bold text-xl mb-3">
          {label} <span className="ml-2">&gt;</span>
      </p>

      <Swiper
        spaceBetween={10}
        slidesPerView={4.3}
      >
        {movies?.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <Link href={`/${movie.movie_id}`}>
                  <CardComponent movie={movie} />
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardContainerComponent;
