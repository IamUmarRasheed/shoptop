import React from 'react'
import Image from 'next/image';

export default function Products() {
  return (
    <section className="w-full">
      <div className="max-w-[1200px] mx-auto text-center mt-20">
        <p className="leading-7 font-semibold [&:not(:first-child)]:mt-6 text-[#4A9BF9]">
          PROMOTIONS
        </p>
        <h2 className="scroll-m-20  pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0  mb-14">
          Our Promotions Events
        </h2>
        <div>
          <div className="max-w-sm ">
            <div className="bg-[#D7D7D9]">
              <Image
                src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.a3d3ccd9.png&w=750&q=75"
                alt=""
                width={650}
                height={650}
              ></Image>
            </div>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              People stopped telling jokes
            </h4>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              People stopped telling jokes
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
