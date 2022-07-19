import "../styles/globals.css";
import "../styles/app.css";
import { useMemo } from "react";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { storyblokComponents } from "../components/sbComponents";
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { firebaseConfig } from "../utils/firebase/firebaseConfig";

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: storyblokComponents,
});

const initializedFirebaseApp = initializeApp(firebaseConfig);
if (await isSupported()) getAnalytics(initializedFirebaseApp);

function MyApp({ Component, pageProps }: AppProps) {
  return useMemo(() => {
    return <Component {...pageProps} />;
  }, [pageProps]);
}

export default MyApp;
