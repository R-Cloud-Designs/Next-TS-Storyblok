import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import {
  StoryblokGridType,
  StoryblokNestedType,
} from "../types/StoryblokComponentTypes";

const Grid = ({ blok }: StoryblokGridType) => {
  return (
    <div
      className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full"
      {...storyblokEditable(blok)}
    >
      <>
        {blok.columns?.map((nestedBlok: StoryblokNestedType) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </>
    </div>
  );
};

export default Grid;
