import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  const pathList: any[] = [];

  let { data } = await storyblokApi.get("cdn/links/");
  const dataLinks = Object.keys(data.links);

  dataLinks.forEach((linkKey: any) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home")
      return;
    const slug = data.links[linkKey].slug;
    let derivedSlug = slug.split("/");
    pathList.push({ params: { slug: derivedSlug } });
  });

  return {
    paths: pathList,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: "draft",
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
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
