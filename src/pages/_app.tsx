import "../styles/globals.css";
import "../styles/app.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { storyblokComponents } from "../components/sbComponents";

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: storyblokComponents,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
