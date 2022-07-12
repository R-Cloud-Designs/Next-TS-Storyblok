export const carouselImageAnimationOptions = {
  enter: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  center: {
    scale: 1.02,
    opacity: 1,
    transition: { duration: 1 },
    borderRadius: 0,
  },
  exit: {
    transition: {
      duration: 0.1,
    },
    opacity: 0,
  },
  hover: { boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.15)", scale: 1.02, transition: { duration: 1 } },
  transition: { opacity: { duration: 1 } },
};

export const carouselNavAnimationOptions = {
  enter: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
    },
  },
  initial: { opacity: 0 },
  hover: { scale: 1.3, fill: "#c5a93b", transition: { duration: 0.3 } },
  tap: { scale: 0.9 },
};

export const carouselContentAnimationOptions = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
  tap: { scale: 0.9 },
};

export const carouselViewAnimationOptions = {
  wrapper: {
    enter: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5 } },
  },
  container: {
    hover: {
      transition: { duration: 0.1 },
    },
  },
  dev: {
    enter: { opacity: 0 },
    animate: {
      opacity: 0.3,
      transition: {
        delay: 1.5,
        duration: 1,
      },
    },
  },
};

export const animatedCharactersOptions = {
  hidden: {
    y: "200%",
    color: "#c5a93b",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    color: "#bbe2e9",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

export const animatedCharacterContainerOptions = {
  visible: {
    transition: {
      staggerChildren: 0.0675,
    },
  },
};
