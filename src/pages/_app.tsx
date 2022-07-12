import "../styles/globals.css";
import "../styles/app.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Grid from "../components/sbComponents/Grid";
import Teaser from "../components/sbComponents/Teaser";
import Page from "../components/sbComponents/Page";
import NextCard from "../components/sbComponents/NextCard";
import Paragraph from "../components/sbComponents/Paragraph";
import Footer from "../components/sbComponents/Footer";
import SplitCarouselView from "../components/sbComponents/SplitCarouselView";

const components = {
  Grid: Grid,
  Teaser: Teaser,
  Page: Page,
  NextCard: NextCard,
  Paragraph: Paragraph,
  Footer: Footer,
  SplitCarouselView: SplitCarouselView,
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
