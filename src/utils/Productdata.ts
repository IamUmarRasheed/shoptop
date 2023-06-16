import { client } from "@/lib/sanityClient"
;

const getdata = async () => {
  const query = `*[_type=="product"]{..., "slug": slug.current}`;
  const res = await client.fetch(query);
  return res;
};

const mydata = async (slug: any) => {
  const query = `*[_type=="product" && slug.current=="${slug}"][0]`;
  const res = await client.fetch(query);
  return res;
};

export { getdata, mydata };

// const getdata= async()=>{
//     const res = await client.fetch(`*[_type=="product"]`);
//    return res
// }
 