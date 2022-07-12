import React from "react";
import carouselViewStyle from "../styles/SplitCarouselView.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { CarouselViewItem } from "../types/CarouselViewTypes";
import { carouselImageAnimationOptions } from "./animationOptions";

interface CarouselImageType {
  currentItem: CarouselViewItem;
}

const SplitCarouselImage = ({ currentItem }: CarouselImageType) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.img
        key={currentItem._uid}
        src={currentItem.bg_image}
        whileHover={carouselImageAnimationOptions.hover}
        transition={carouselImageAnimationOptions.transition}
        initial={carouselImageAnimationOptions.enter}
        animate={carouselImageAnimationOptions.center}
        exit={carouselImageAnimationOptions.exit}
        className={carouselViewStyle.split_carousel_image}
      />
    </AnimatePresence>
  );
};

export default SplitCarouselImage;
