import { CarouselViewItem } from "../../types/CarouselViewTypes";

export const getIndexOf = (carouselItems: CarouselViewItem[], obj: CarouselViewItem) => {
  return carouselItems?.map((item) => item._uid).indexOf(obj._uid);
};
