"use client"
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

 
export default function Cartitem() {
     const cart = useSelector((state: any) => {
       return state.cart;
     });
    //  useEffect(()=>{

    //  },[cart])
     console.log("helocat",cart.items.quantity)
  return (
    <div className="  bg-red-600   w-4 h-5 text-base rounded-full absolute -top-0  right-1">
      {cart?.items.map((item:any)=>item.quantity)}
    </div>
  );
}
