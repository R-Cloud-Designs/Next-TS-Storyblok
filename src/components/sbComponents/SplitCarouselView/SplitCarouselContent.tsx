import React from "react";
import { motion } from "framer-motion";
import { TagOptions } from "./bonus/AnimatedCharacters";
import styles from "../styles/SplitCarouselView.module.css";
import { CarouselViewItem } from "../types/CarouselViewTypes";
import AnimatedCharacters from "./bonus/AnimatedCharacters";
import { animatedCharacterContainerOptions, carouselContentAnimationOptions } from "./animationOptions";

interface SplitCarouselContentType {
  currentItem: CarouselViewItem;
}

const SplitCarouselContent = ({ currentItem }: SplitCarouselContentType) => {
  return (
    <div className={styles.carousel_content_container}>
      <AnimatedCharacters tag="h2" key={currentItem._uid} content={currentItem?.intro_title} className={styles.carousel_content_title} />
      <h1 className={styles.carousel_content_header}>{currentItem?.header_title}</h1>
      <p className={styles.carousel_content_description}>{currentItem?.content_description}</p>
      <motion.a
        href={currentItem?.button_link}
        whileHover={carouselContentAnimationOptions.hover}
        whileTap={carouselContentAnimationOptions.tap}
        className={styles.carousel_content_button_link}
      >
        {currentItem?.button_title}
      </motion.a>
    </div>
  );
};

export default SplitCarouselContent;
