import Wrapper from "@/components/Wrapper";
import Shopcart from "@/views/Shopcart";
import React from "react";


export default function page() {
  return (
    <section className="w-full ">
      <Wrapper>
       <Shopcart/>
      </Wrapper>
    </section>
  );
}
