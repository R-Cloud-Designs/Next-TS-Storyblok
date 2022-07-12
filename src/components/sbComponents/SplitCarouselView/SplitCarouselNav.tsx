import { motion } from "framer-motion";
import styles from "../styles/SplitCarouselView.module.css";
import { carouselNavAnimationOptions } from "./animationOptions";

interface SplitCarouselNavType {
  handleClick: (newNumber: number) => void;
}

const SplitCarouselNav = ({ handleClick }: SplitCarouselNavType) => {
  return (
    <motion.div
      animate={carouselNavAnimationOptions.enter}
      initial={carouselNavAnimationOptions.initial}
      className={styles.carousel_nav_container}
    >
      <motion.span
        onClick={() => handleClick(-1)}
        className={styles.carousel_arrow}
        whileTap={carouselNavAnimationOptions.tap}
        whileHover={carouselNavAnimationOptions.hover}
      >
        <motion.svg width="32" height="32" viewBox="0 0 24 24" className={styles.button_icon}>
          <motion.path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
        </motion.svg>
      </motion.span>
      <motion.div className={styles.nav_divider} />
      <motion.span
        className={styles.carousel_arrow}
        onClick={() => handleClick(1)}
        whileTap={carouselNavAnimationOptions.tap}
        whileHover={carouselNavAnimationOptions.hover}
      >
        <motion.svg width="32" height="32" viewBox="0 0 24 24" className={styles.button_icon}>
          <motion.path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
        </motion.svg>
      </motion.span>
    </motion.div>
  );
};

export default SplitCarouselNav;
