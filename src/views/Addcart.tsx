import Wrapper from "@/components/Wrapper";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiShoppingCart } from "react-icons/fi";

export default function Addcart() {
  return (
    <section className="w-full">
      <Wrapper>
        <div className=" grid grid-cols-[65%,1fr,] gap-x-8 py-14">
          <div className="max-h-full h-[680px] flex gap-x-6">
            <div>
              <Image
                src="https://cdn.sanity.io/images/dow10h3v/production/a6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png"
                alt=""
                width={100}
                height={40}
              ></Image>
            </div>

            <Image
              src="https://cdn.sanity.io/images/dow10h3v/production/a6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png"
              alt=""
              width={660}
              height={400}
            ></Image>
          </div>
          <div>
            <div>
              {" "}
              <h3 className="scroll-m-20 text-2xl  font-semibold tracking-widest">
                Brushed Raglan Sweatshirt
              </h3>
              <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight text-[#B0B0B0]">
                Sweater
              </h4>
            </div>
            <div className="mt-10">
              <p className="leading-7 [&:not(:first-child)]:mt-6 font-bold mb-4 ">
                SELECT SIZE
              </p>
              <ul className="text-[#666666] flex gap-x-10 font-bold">
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
              </ul>
            </div>
            <div className="flex gap-x-4 items-center mt-10">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mr-5">
                Quantity:
              </h4>
              <span className="p-2 rounded-full bg-[#F1F1F1]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </span>
              <span>1</span>
              <span className="border-2 rounded-full border-black p-2 ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  t="1551322312294"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                  <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                </svg>
              </span>
            </div>
            <div className="flex gap-x-4 mt-10">
              <div>
                <Button
                  className="bg-[#212121] px-8 text-white  rounded-none"
                  variant="secondary"
                >
                  <FiShoppingCart className="mr-2 h-4 w-4" />
                  Add to cart
                </Button>
              </div>
              <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                $195.00
              </h2>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
