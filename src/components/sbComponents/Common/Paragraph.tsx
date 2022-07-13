import React from "react";
import { storyblokEditable } from "@storyblok/react";
import { StoryblokParagraphType } from "../types/StoryblokComponentTypes";

const Paragraph = ({ blok }: StoryblokParagraphType) => {
  return (
    <div {...storyblokEditable(blok)}>
      <p className="mt-3 text-2xl">
        {blok.title}
        <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
          {blok.codeTitle}
        </code>
      </p>
    </div>
  );
};

export default Paragraph;
