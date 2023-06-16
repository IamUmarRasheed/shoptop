interface myImage {
  _type: string;
  _key: string;
  asset: {};
}
interface Des {
  markDefs: [];
  children: [];
  _type: string;
  style: string;
  _key: string;
}

export type sanitydata = {
  size: string[];

  price: number;

  image: myImage[];
  quantity: number;
  _type: string;
  description: Des[];
  productTypes: string[];
  title: string;
  _id: string;
  slug: { _type: string; current: string };
};
