import "../styles/globals.css";
import "../styles/app.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Grid from "../components/sbComponents/Common/Grid";
import Teaser from "../components/sbComponents/Common/Teaser";
import Page from "../components/sbComponents/Common/Page";
import NextCard from "../components/sbComponents/NextCard/NextCard";
import Paragraph from "../components/sbComponents/Common/Paragraph";
import Footer from "../components/sbComponents/Common/Footer";
import SplitCarouselView from "../components/sbComponents/SplitCarouselView/SplitCarouselView";

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
