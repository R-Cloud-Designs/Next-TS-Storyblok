import "../styles/globals.css";
import "../styles/app.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/sbComponents/Feature";
import Grid from "../components/sbComponents/Grid";
import Teaser from "../components/sbComponents/Teaser";
import Page from "../components/sbComponents/Page";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
