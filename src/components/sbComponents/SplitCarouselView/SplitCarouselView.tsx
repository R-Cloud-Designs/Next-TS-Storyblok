import React, { useEffect, useState } from "react";
import styles from "../styles/SplitCarouselView.module.css";
import { SplitCarouselViewType } from "../types/StoryblokComponentTypes";
import { reduceCarouselViewItems } from "./helpers/reduceCarouselItems";
import { storyblokEditable } from "@storyblok/react";
import { getIndexOf } from "./helpers/getIndexOf";
import { motion } from "framer-motion";
import SplitCarouselImage from "./SplitCarouselImage";
import SplitCarouselNav from "./SplitCarouselNav";
import SplitCarouselContent from "./SplitCarouselContent";
import { carouselViewAnimationOptions } from "./animationOptions";
import SplitCarouselIndicator from "./SplitCarouselIndicator";

const SplitCarouselView = ({ blok }: SplitCarouselViewType) => {
  const carouselItems = reduceCarouselViewItems(blok.carousel_items);
  const [currentItem, setCurrentItem] = useState(carouselItems![0]);
  const [currentIndex, setCurrentIndex] = useState(getIndexOf(carouselItems!, currentItem));

  const handleClick = (newDirection: number) => {
    if ((currentIndex === 0 && newDirection < 0) || (currentIndex === carouselItems!.length - 1 && newDirection > 0)) return;
    setCurrentIndex(currentIndex! + newDirection);
  };

  useEffect(() => {
    setCurrentItem(carouselItems![currentIndex]);
  }, [currentIndex]);

  return (
    <motion.div {...storyblokEditable(blok)} className={styles.carousel_wrapper}>
      {currentItem?.dev && process.env.NODE_ENV === "development" && (
        <motion.div
          initial={carouselViewAnimationOptions.dev.enter}
          animate={carouselViewAnimationOptions.dev.animate}
          className={styles.dev_mode_counter}
        >
          Item: {currentIndex}
        </motion.div>
      )}
      <SplitCarouselNav handleClick={handleClick} />
      <motion.div
        initial={carouselViewAnimationOptions.wrapper.enter}
        animate={carouselViewAnimationOptions.wrapper.animate}
        className={styles.carousel_content_wrapper}
      >
        <motion.div className={styles.carousel_bg_container} whileHover={carouselViewAnimationOptions.container.hover}>
          <SplitCarouselImage currentItem={currentItem} />
          <SplitCarouselIndicator currentIndex={currentIndex} content={carouselItems} />
        </motion.div>
        <SplitCarouselContent currentItem={currentItem} />
      </motion.div>
    </motion.div>
  );
};

export default SplitCarouselView;
