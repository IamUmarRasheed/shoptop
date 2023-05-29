import { Button } from "@/components/ui/button";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="max-w-[1200px] grid grid-cols-2 mx-auto my-14 ">
        <div className="">
          <h4 className=" bg-[#E1EDFF] inline-block py-2 px-4 rounded-md text-[#0000FF] text-lg font-medium mb-12 mt-5">
            Sale 70%{" "}
          </h4>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-[#212121] mb-12">
            An Industrial Take on Streetwear
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 mb-12">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Button className=" rounded-none">
            <FiShoppingCart className="mr-2 h-4 w-4" />
            Login with Email
          </Button>
          <div className="flex gap-x-12 mt-20">
            {" "}
            <Image
              src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=128&q=75"
              alt=""
              width={100}
              height={35}
            ></Image>
            <Image
              src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.0489f1fc.png&w=128&q=75"
              alt=""
              width={100}
              height={35}
            ></Image>
            <Image
              src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.247cd605.png&w=128&q=75"
              alt=""
              width={100}
              height={35}
            ></Image>
            <Image
              src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75"
              alt=""
              width={100}
              height={35}
            ></Image>
          </div>
        </div>
        <div className="bg-[#FFECE3] rounded-full   pt-4 ">
          <Image
            src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.a3d3ccd9.png&w=750&q=75"
            alt=""
            width={650}
            height={650}
          ></Image>
        </div>
      </div>
    </section>
  );
}
