import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="max-w-full">
      <Wrapper>
        <div className="flex justify-between  items-center ">
          <div>
            <Link href={"/"}>
              <img
                src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/static/media/Logo.3267fed8.png"
                alt={""}
              />
            </Link>
          </div>
          <div>
            <ul className="flex  gap-x-6">
              <Link href={'/'}>
                <li>Female</li>
              </Link>
              <Link href={'/'}>
                <li>Kids</li>
              </Link>
              <Link href={'/'}>
                <li>Male</li>
              </Link>
              <Link href={'/'}>
                <li>All Products</li>
              </Link>
            </ul>
          </div>
          <div>
            <form className="  flex  rounded-md   border border-1 px-1">
              <button className=" ">
                <FiSearch />
              </button>
              <input
                className=" bg-transparent border-none focus:outline-none w-60 ml-2"
                type="text"
                placeholder="Whats are you looking for"
              ></input>
            </form>
          </div>
          <div className=" bg-gray-200/70 rounded-full px-3 py-2">
            <button>
              <FiShoppingCart />
            </button>
          </div>
        </div>
      </Wrapper>
    </header>
  );
}
