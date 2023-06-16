"use client"
import React from 'react'
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
import { Button } from "@/components/ui/button";
import {FiShoppingCart} from 'react-icons/fi'
import toast from 'react-hot-toast';


export default function AddToButton({data}:any) {
    const dispatch = useDispatch()
    const handleAddtocart=()=>{
         dispatch(cartActions.addToCart({ product: {data} , quantity: 1 }));
         toast.success("Product added");

    }
  return (
    <div>
      <Button
        className="bg-[#212121] px-8 text-white  rounded-none"
        variant="secondary"
       onClick={handleAddtocart}>
        <FiShoppingCart className="mr-2 h-4 w-4" />
        Add to cart
      </Button>
    </div>
  );
}
