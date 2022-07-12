import { storyblokEditable } from "@storyblok/react";
import { StoryblokTeaserType } from "../SplitCarouselView/helpers/StoryblokComponentTypes";

const Teaser = ({ blok }: StoryblokTeaserType) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h1 className="text-6xl font-bold">
        {blok.title}
        <a className="text-blue-600" href={blok.url}>
          {blok.urlTitle}
        </a>
      </h1>
    </div>
  );
};

export default Teaser;
