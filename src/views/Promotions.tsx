import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Promotions() {
  return (
    <section className="w-full">
      <div className="text-center mx-auto max-w-[1200px] leading-10  ">
        <p className="leading-7 font-semibold [&:not(:first-child)]:mt-6 text-[#4A9BF9]">
          PROMOTIONS
        </p>
        <h2 className="scroll-m-20  pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0  mb-14">
          Our Promotions Events
        </h2>
        <div className="grid grid-cols-[40rem,auto]  gap-x-8">
          <div className="">
            <div className="flex justify-between text-start  px-14 items-center bg-[#D6D6D8] mb-4">
              <div>
                <h2 className=" discout scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">
                  GET UP TO <strong className="font-bold text-4xl"> 60%</strong>
                </h2>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  For the summer season
                </h4>
              </div>

              <div>
                <Image
                  src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent1.6f776995.png&w=384&q=75"
                  alt=""
                  width={282}
                  height={218}
                ></Image>
              </div>
            </div>
            <div className="bg-[#212121] text-white py-10">
              <h2 className="scroll-m-20  pb-2 text-5xl font-semibold tracking-tight transition-colors first:mt-0">
                GET 30% Off
              </h2>
              <h4 className="scroll-m-20 text-xl font-medium mb-4 tracking-tight">
                USE PROMO CODE
              </h4>
              <Button className="bg-[#474747] px-20  ">
                D I N E W E E K E N D S A L E
              </Button>
            </div>
          </div>
          <div className="flex gap-x-4  ">
            <div className="bg-[#EFE1C7] pt-10 text-start ">
              <p className="leading-7 px-4 font-medium">Flex Sweatshirt</p>
              <p className="leading-7 px-4  ">
                <span className=" line-through "> $100.00</span>
                <strong className="ml-2">$75.00</strong>
              </p>
              <div className="mt-7">
                <Image
                  src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.b5f201ac.png&w=384&q=75"
                  alt=""
                  width={282}
                  height={362}
                ></Image>
              </div>
            </div>
            <div className="bg-[#D7D7D9] pt-10 text-start">
              <p className="leading-7 px-4 font-medium">
                Flex Push Button Bomber
              </p>
              <p className="leading-7 px-4 ">
                <span className=" line-through ">$225.00</span>
                <strong className="ml-2">$190.00 </strong>
              </p>
              <div className="mt-7">
                <Image
                  src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.798fa92b.png&w=384&q=75"
                  alt=""
                  width={282}
                  height={362}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
