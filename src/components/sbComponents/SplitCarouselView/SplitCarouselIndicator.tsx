import style from "../styles/SplitCarouselView.module.css";
import { motion } from "framer-motion";
import React from "react";
import { CarouselViewItem } from "../types/CarouselViewTypes";
import { getIndexOf } from "./helpers/getIndexOf";

interface SplitCarouselIndicatorType {
  content: CarouselViewItem[];
  currentIndex: number;
}

const SplitCarouselIndicator = ({ content, currentIndex }: SplitCarouselIndicatorType) => {
  return (
    <motion.div className={style.animated_pagination_container}>
      {content?.map((splitViewItem, index) => {
        return (
          <motion.div
            key={splitViewItem._uid}
            animate={{ opacity: currentIndex === index ? 1 : 0.3 }}
            className={style.animated_pagination_indicator}
          />
        );
      })}
    </motion.div>
  );
};

export default SplitCarouselIndicator;
