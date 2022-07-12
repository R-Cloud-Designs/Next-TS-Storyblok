import { CarouselViewItem } from "../../types/CarouselViewTypes";

export const reduceCarouselViewItems = (unSortedCarouselViewItems: CarouselViewItem[]) => {
  const sortedCarouselViewItems = unSortedCarouselViewItems.sort((item1: CarouselViewItem, item2: CarouselViewItem) => {
    return item1.priority - item2.priority;
  });

  const reducedCarouselViewItems = sortedCarouselViewItems.reduce((acc: any, obj: any) => {
    const carouselViewItem = { ...obj };
    delete carouselViewItem._editable;
    carouselViewItem["bg_image"] = obj.bg_image.filename;

    if (process.env.NODE_ENV === "development") carouselViewItem["dev"] = obj.dev;

    acc.push(carouselViewItem as CarouselViewItem);
    return acc as CarouselViewItem[];
  }, []);

  return reducedCarouselViewItems;
};
