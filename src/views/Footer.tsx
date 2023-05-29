import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="max-w-full  ">
      <div className="grid grid-cols-[30rem,auto,auto,auto]  max-w-[1200px] mx-auto ">
        <div className="    mb-5   max-w-md">
          <img
            className="mb-5"
            src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/static/media/Logo.3267fed8.png"
            alt={""}
          />
          <p className="text-base  leading-8 mb-5">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex gap-x-5">
            <p className="p-4 bg-gray-200 rounded-lg">
              <AiOutlineTwitter />
            </p>
            <p className="p-4 bg-gray-200 rounded-lg">
              <AiFillLinkedin />
            </p>
            <p className="p-4 bg-gray-200 rounded-lg">
              <FaFacebookF />
            </p>
          </div>
        </div>

        <div className="">
          <h4 className="mb-5 font-semibold text-xl">Contact</h4>
          <ul className=" leading-10 text-base">
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="">
          <h4 className="mb-5 font-semibold text-xl">Support</h4>
          <ul className=" leading-10 text-base">
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-5 font-semibold text-xl">Company</h4>
          <ul className=" leading-10 text-base">
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
      </div>
      <div className=" w-full border-t-2 border-black py-5">
        <div className="grid grid-cols-3 mx-auto max-w-[1200px] ">
          <p>Copyright © 2022 Dine Market</p>
          <p>
            Design by. <span className="font-bold">Weird Design Studio</span>
          </p>
          <p>
            Code by. <span className="font-bold">shabrina12 on github</span>
          </p>
        </div>
      </div>
    </div>
  );
}
