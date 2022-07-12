import React, { FC } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/AnimatedCharacters.module.css";
import { animatedCharacterContainerOptions, animatedCharactersOptions } from "../animationOptions";

export const TagOptions = {
  h1: "H1",
  h2: "H2",
  p: "p",
};

interface AnimatedCharactersType {
  content?: string;
  tag?: keyof typeof TagOptions;
  className?: string;
}

const AnimatedCharacters = ({ content, tag, className }: AnimatedCharactersType) => {
  if (!tag) throw new Error("Tag is required");
  if (!content) throw new Error("Content is required");

  const wordInLetters: string[][] = [];
  const wordList = content.split(" ");

  for (const [, item] of wordList.entries()) {
    wordInLetters.push(item.split(""));
  }

  wordInLetters.map((letter) => {
    return letter.push("\u00A0");
  });

  const DynamicHeading = TagOptions[tag] as keyof JSX.IntrinsicElements;

  return (
    <motion.div initial="hidden" animate="visible" variants={animatedCharacterContainerOptions}>
      <DynamicHeading className={className}>
        {wordInLetters.map((wordList) => {
          return (
            <>
              {wordList.flat().map((letter, index) => {
                return (
                  <motion.span className={styles.animated_character_container} key={index}>
                    <motion.span className={styles.animated_character_element} key={letter + index} variants={animatedCharactersOptions}>
                      {letter}
                    </motion.span>
                  </motion.span>
                );
              })}
            </>
          );
        })}
      </DynamicHeading>
    </motion.div>
  );
};

export default AnimatedCharacters;
