'use client'
import React from 'react'
import Image from 'next/image';
import Wrapper from '@/components/Wrapper';
import Card from '@/components/Card';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Products() {
  return (
    <section className="w-full ">
      <Wrapper>
        <div className="text-center my-20  ">
          <p className="leading-7 font-semibold [&:not(:first-child)]:mt-6 text-[#4A9BF9]">
            PRODUCTS
          </p>
          <h2 className="scroll-m-20  pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0  mb-14">
            Check What We Have
          </h2>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <div className="my-10 ">
              <SwiperSlide>
                <Card
                  src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.a3d3ccd9.png&w=750&q=75"
                  title="   People stopped telling jokes"
                  price={3445}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.a3d3ccd9.png&w=750&q=75"
                  title="   People stopped telling jokes"
                  price={3445}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.a3d3ccd9.png&w=750&q=75"
                  title="   People stopped telling jokes"
                  price={3445}
                />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Card
                  src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.a3d3ccd9.png&w=750&q=75"
                  title="   People stopped telling jokes"
                  price={3445}
                />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Card
                  src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.a3d3ccd9.png&w=750&q=75"
                  title="   People stopped telling jokes"
                  price={3445}
                />{" "}
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </Wrapper>
    </section>
  );
}
