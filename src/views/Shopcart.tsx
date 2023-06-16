"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { urlForImage } from "../../sanity/lib/image";
import { cartActions } from "@/store/slice/cartSlice";
import { sanitydata } from "@/utils/types";

import toast from "react-hot-toast";

export default function Shopcart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => {
    return state.cart;
  });

  const handleIncrement = (itemId: string) => {
    dispatch(cartActions.increment(itemId));
    toast.success("Product added");
  };

  const handleDecrement = (itemId: string) => {
    dispatch(cartActions.decrement(itemId));
    toast.success("Product added");
  };

  const handleRemove = (itemId: string) => {
    dispatch(cartActions.removeFromCart(itemId));
    toast.success("Product added");
  };

  return (
    <>
      <div className=" my-44 pb-8">
        <h2 className="scroll-m-20   text-4xl font-semibold tracking-tight transition-colors first:mt-0  mb-4">
          Shopping Cart
        </h2>
        <div className="flex  gap-x-16">
          <div className=" flex flex-col flex-1 ">
            {cart.items.length > 0 ? (
              cart.items.map((itm: any) => (
                <div className="flex-1 flex mt-8 gap-x-8" key={itm._id}>
                  <div className="">
                    <Image
                      className="rounded-lg"
                      src={urlForImage(itm.image[0]).url()}
                      width={197}
                      height={190}
                      alt=""
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <h3>{itm.title}</h3>
                      <button onClick={() => handleRemove(itm._id)}>
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="28"
                          width="28"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <p className="mb-4 text-lg font-bold text-[#9C9E9C]">
                      Dress
                    </p>
                    <p className="mb-4 font-semibold">Delivery Estimation</p>
                    <p className="mb-4 font-bold text-[#FFD963]">
                      5 Working Days
                    </p>
                    <div className="flex item-center justify-between">
                      <h2 className="text-2xl font-bold">{itm.totalPrice}</h2>
                      <div className="flex gap-x-4 items-center">
                        <span
                          className="p-2 rounded-full bg-[#F1F1F1]  cursor-pointor"
                          onClick={() => handleDecrement(itm._id)}
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                          </svg>
                        </span>
                        <span>{itm.quantity}</span>
                        <span
                          className="border-2 rounded-full border-black p-2"
                          onClick={() => handleIncrement(itm._id)}
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
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
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="  flex-1 text-center text-5xl font-bold mt-20">
                <h1>Nothing found</h1>
              </div>
            )}
          </div>

          <div className="w-80 max-w-sm p-5">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight transition-colors first:mt-0 mb-6">
              Order summary
            </h3>
            <div className="flex justify-between mb-6">
              <p>Quantity</p>
              <p>{cart.totalQuantity} Product</p>
            </div>
            <div className="flex justify-between mb-12">
              <p>Sub Total</p>
              <p>{cart.totalAmount}</p>
            </div>

            <Button className="rounded-none w-[280px]">
              Process to Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}














