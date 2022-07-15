import Head from "next/head";
import type { InferGetStaticPropsType } from "next";
import { useStoryblokState, getStoryblokApi, StoryblokComponent } from "@storyblok/react";

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  const pathList: any[] = [];

  try {
    const { data } = await storyblokApi.get("cdn/links/");
    const dataLinks = Object.keys(data.links);

    dataLinks.forEach((linkKey: any) => {
      const slug = data.links[linkKey].slug;
      const derivedSlug = slug.split("/");
      pathList.push({ params: { slug: derivedSlug } });
    });
  } catch (error: any) {
    console.log(error.response.statusText);
  }

  return {
    paths: pathList,
    fallback: true,
  };
}

export async function getStaticProps({ params, preview }: any) {
  const storyblokApi = getStoryblokApi();
  const sbParams = { version: "draft" };
  const sbSlug = params.slug ? params.slug.join("/") : "home";

  const { data } = await storyblokApi.get(`cdn/stories/${sbSlug}`, sbParams);
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: preview || false,
    },
    revalidate: 1800,
  };
}

const Home = ({ story, preview }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { content, name } = useStoryblokState(story, {}, preview);

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
