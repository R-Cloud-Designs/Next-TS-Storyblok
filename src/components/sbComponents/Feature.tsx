import { storyblokEditable } from "@storyblok/react";
import { StoryblokFeatureType } from "../../types/StoryblokComponentTypes";

const Feature = ({ blok }: StoryblokFeatureType) => {
  return (
    <div className="column feature" {...storyblokEditable(blok)}>
      {blok.name}
    </div>
  );
};

export default Feature;
