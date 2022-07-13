import React from "react";
import { storyblokEditable } from "@storyblok/react";
import { StoryblokFooterType } from "../types/StoryblokComponentTypes";

const Footer = ({ blok }: StoryblokFooterType) => {
  return (
    <footer
      key={blok._uid}
      className="flex flex-row justify-center items-center w-full h-24 border-t"
      {...storyblokEditable(blok)}
    >
      <a
        href={blok.linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center flex flex-row items-center"
      >
        {blok.linkTitle}
        <img
          src={blok.iconSrc.filename}
          alt={blok.iconAlt}
          className="h-4 ml-2"
        />
      </a>
    </footer>
  );
};

export default Footer;
