import React from "react";
import {
  StoryblokNestedType,
  StoryblokPageType,
} from "../types/StoryblokComponentTypes";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }: StoryblokPageType) => {
  return (
    <>
      <main
        className="flex flex-col items-center justify-center w-full h-full flex-1 px-20 text-center"
        {...storyblokEditable(blok)}
      >
        {blok.body.map((nestedBlok: StoryblokNestedType) => {
          return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
        })}
      </main>

      {blok.footer.map((nestedBlok: StoryblokNestedType) => {
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
      })}
    </>
  );
};

export default Page;
