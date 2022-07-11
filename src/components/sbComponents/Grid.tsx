import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import {
  StoryblokGridType,
  StoryblokNestedType,
} from "../../types/StoryblokComponentTypes";

const Grid = ({ blok }: StoryblokGridType) => {
  return (
    <div className="grid" {...storyblokEditable(blok)}>
      {blok.columns?.map((nestedBlok: StoryblokNestedType) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
