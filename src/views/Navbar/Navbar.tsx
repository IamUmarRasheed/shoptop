import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { NavbarArray,NavbarItemType } from "@/utils/Navnardata";
import DropDown from "./Dropdown";
import {HiOutlineChevronDown} from "react-icons/hi";
import Cartitem from "./Cartitem";

export default function Navbar() {
  return (
    <header className="max-w-full">
      <Wrapper>
        <div className="flex justify-between  items-center ">
          <Link href="/">
            <div>
              <img
                src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/static/media/Logo.3267fed8.png"
                alt={""}
              />
            </div>
          </Link>
          <div>
            <ul className="flex  gap-x-6">
              {NavbarArray.map((item: NavbarItemType, index: number) => (
                <li
                  key={index}
                  className="flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group"
                >
                  <Link href={item.href}>{item.label}</Link>
                  {item.isDropDown ? (
                    <HiOutlineChevronDown
                      className="mt-1 -rotate-180 group-hover:rotate-0 duration-300"
                      size={15}
                    />
                  ) : (
                    ""
                  )}
                  {item.isDropDown && (
                    <div
                      className={`invisible group-hover:visible absolute top-8 left-0 py-2 px-6 bg-gray-100 font-light min-w-[7.8rem]`}
                    >
                      <DropDown item={item} />
                    </div>
                  )}
                </li>
              ))}
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
          <Link href={'/addToCart'}>
            <div className=" bg-gray-200/70 rounded-full px-3 py-2 relative">
              {/* <div className="  bg-red-600   w-4 h-5 text-base rounded-full absolute -top-0  right-1">
                1
              </div> */}
              <Cartitem/>
              <button>
                <FiShoppingCart />
              </button>
            </div>
          </Link>
        </div>
      </Wrapper>
    </header>
  );
}
