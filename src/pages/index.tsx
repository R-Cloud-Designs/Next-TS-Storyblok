import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from "@storyblok/react";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";

export async function getStaticProps() {
  let slug = "home";
  let sbParams = {
    version: "draft",
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
    },
    revalidate: 3600,
  };
}

const Home = ({ story }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { content, name } = useStoryblokState(story);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center py-2">
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryblokComponent blok={content} />
    </div>
  );
};

export default Home;
