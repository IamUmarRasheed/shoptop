// import { client } from "@/lib/sanityClient";
// import React from "react";
// import Image from "next/image";
// import { Image as IImage } from "sanity";
// import { urlForImage } from "../../../sanity/lib/image";

// export const getdata = async () => {
//   const res = await client.fetch(`*[_type=="product"]{
//     title,
//     _id,
//     description,
//     image,
//     price,
//     category->{
//         name
//     }
//   }`);
//   return res;
// };
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

// export default async function page() {
//   const data: Iproduct[] = await getdata();
//   {
//     console.log(data);
//   }
//   return (
//     <div>
//       {data.map((item) => (
//         <>
//           {/* <Image
//             src={urlForImage(item.image).url()}
//             alt=""
//             width={300}
//             height={300}
//           /> */}
//           <h1>{item.title}</h1>
//         </>
//       ))}
//     </div>
//   );
// }
