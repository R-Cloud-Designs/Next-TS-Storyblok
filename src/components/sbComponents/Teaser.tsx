import { storyblokEditable } from "@storyblok/react";
import { StoryblokTeaserType } from "../../types/StoryblokComponentTypes";

const Teaser = ({ blok }: StoryblokTeaserType) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};

export default Teaser;
