'use client'
import React from 'react'
import Image from 'next/image';
import Wrapper from '@/components/Wrapper';
import Card from '@/components/Card';
import { urlForImage } from '../../sanity/lib/image';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {getdata} from '@/utils/Productdata';
import Link from 'next/link';

export default async function Products() {
  const data =await getdata()
  // console.log(data)
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
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <div className="my-10 ">
              {data?.map((itm: any, i: any) => (
                
                <SwiperSlide key={i}>
                 
                  <Link href={`/product/${itm.slug}`}>
                    <Card
                      src={urlForImage(itm.image[0]).url()}
                      title={itm.title}
                      price={itm.price}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </Wrapper>
    </section>
  );
}
