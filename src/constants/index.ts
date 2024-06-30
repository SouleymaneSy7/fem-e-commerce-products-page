import {
  DeleteIcon,
  product_img_1,
  product_img_2,
  product_img_3,
  product_img_4,
  product_thumbnail_1,
  product_thumbnail_2,
  product_thumbnail_3,
  product_thumbnail_4,
} from "@/utils";

export const Images = [
  product_img_1,
  product_img_2,
  product_img_3,
  product_img_4,
];

export const Thumbnails = [
  product_thumbnail_1,
  product_thumbnail_2,
  product_thumbnail_3,
  product_thumbnail_4,
];

export const navigationList = [
  {
    id: 1,
    linkTitle: "Collections",
  },
  {
    id: 2,
    linkTitle: "Men",
  },
  {
    id: 3,
    linkTitle: "Women",
  },
  {
    id: 4,
    linkTitle: "About",
  },
  {
    id: 5,
    linkTitle: "Contact",
  },
];

export const mainContent = {
  subTitle: "Sneaker Company",
  title: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: "$125.00",
  reduction: "50%",
  fullPrice: "$250.00",
};

export const cartContent = {
  cartImg: product_thumbnail_1,
  cartTitle: "Fall Limited Edition Sneakers",
  cartIcon: DeleteIcon,
};

export const buttonText = "Add to cart";
export const cartButtonText = "Checkout";
export const cartEmptyText = "Your cart is empty.";
