import React from "react";
import Image from "next/image";

interface CardProps {
  src: string;
  title: string;
  price: number;
}

export default function Card(props: CardProps) {
  return (
    <section>
      <div className="max-w-sm hover:scale-110 ease-in-out hover:-translate-y-1 duration-300 py-10  ">
        <div className="bg-[#D7D7D9] py-2">
          <Image src={props.src} alt="" width={650} height={650} />
        </div>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {props.title}
        </h4>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          ${props.price}
        </h4>
      </div>
    </section>
  );
}
