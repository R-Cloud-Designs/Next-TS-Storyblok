import {
  StoryblokNestedType,
  StoryblokPageType,
} from "../../types/StoryblokComponentTypes";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import React from "react";

const Page = ({ blok }: StoryblokPageType) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok: StoryblokNestedType) => {
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
      })}
    </main>
  );
};

export default Page;
