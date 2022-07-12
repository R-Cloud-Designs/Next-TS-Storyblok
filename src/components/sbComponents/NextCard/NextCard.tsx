import { storyblokEditable } from "@storyblok/react";
import { StoryblokNextCardType } from "../SplitCarouselView/helpers/StoryblokComponentTypes";

const NextCard = ({ blok }: StoryblokNextCardType) => {
  return (
    <div {...storyblokEditable(blok)} className="p-6 border w-96 rounded-xl mt-6">
      <a href={blok.href} className="text-left hover:text-red-600 focus:text-blue-600">
        <h3 className="text-2xl font-bold">{blok.title} &rarr;</h3>

        <p className="mt-4 text-xl">{blok.subtitle}</p>
      </a>
    </div>
  );
};

export default NextCard;
