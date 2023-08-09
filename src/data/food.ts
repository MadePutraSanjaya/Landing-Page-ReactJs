import img1 from "../Assets/gurame.jpeg";
import img2 from "../Assets/cumi_goreng.jpeg";
import img3 from "../Assets/udang_padang.webp";
import img4 from "../Assets/lobster_bakar.webp";
import img5 from "../Assets/kepiting_tiram.png";
import img6 from "../Assets/nasigoreng.jpeg";

export type IFood = {
  foodId: number;
  title: string;
  price: number;
  description: string;
  imgUrl: string;
  recommended?: string;
};

export const food: IFood[] = [
  {
    foodId: 1,
    title: "Ikan Bakar",
    price: 15000,
    description: "Grilled fish with special spices.",
    imgUrl: img1,
    recommended: "Highly recommended!",
  },
  {
    foodId: 2,
    title: "Gurame Goreng",
    price: 18000,
    description: "Fried gourami fish served with chili sauce.",
    imgUrl: img1,
    recommended: "Must try!",
  },
  {
    foodId: 3,
    title: "Cumi Goreng Tepung",
    price: 12000,
    description: "Fried calamari with crispy flour coating.",
    imgUrl: img2,
    recommended: "Delicious appetizer!",
  },
  {
    foodId: 4,
    title: "Udang Saus Padang",
    price: 22000,
    description: "Shrimp in Padang-style spicy sauce.",
    imgUrl: img3,
    recommended: "Spicy and flavorful!",
  },
  {
    foodId: 5,
    title: "Lobster Bakar",
    price: 35000,
    description: "Grilled lobster with garlic butter sauce.",
    imgUrl: img4,
    recommended: "Luxurious seafood!",
  },
  {
    foodId: 6,
    title: "Kepiting Saus Tiram",
    price: 25000,
    description: "Crab in savory oyster sauce.",
    imgUrl: img5,
    recommended: "Rich and flavorful!",
  },
  {
    foodId: 7,
    title: "Nasi Goreng Seafood",
    price: 18000,
    description: "Fried rice with assorted seafood.",
    imgUrl: img6,
    recommended: "A seafood lover's delight!",
  },
];
