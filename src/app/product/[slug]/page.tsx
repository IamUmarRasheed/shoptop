import Addcart from "@/views/Addcart";
import Description from "@/views/Description";
import { mydata } from "@/utils/Productdata";
import React from "react";

interface Props {
  params: { slug: string };
}

// interface Iproduct {
//   title: string;
//   _id: string;
//   image: IImage;
//   description: string;
//   price: number;
//   category: {
//     name: string;
//   };
// }
export default async function page({ params }: Props) {
  const slug = params.slug;
  const data:any = await mydata(slug);
  console.log(data);
  return (
    <div>
      <Addcart   data={data} />
      <Description />
    </div>
  );
}
