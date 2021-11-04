import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Layout } from "../components/Layout";
import { createEmotionCache } from "../libs/create-emotion-cache";
import { theme } from "../styles/theme";
import { wrapper } from "../redux/store";

const KAKAO_MAP = "d0a88c50dbf74ee622ba0d4d1aafea93"; // 이거 env로 묻어야하나요
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = createEmotionCache(),
}: MyAppProps) => (
  <>
    <Head>
      <title>알구</title>
      <meta name="keywords" content="아르바이트, 알바, 소일거리, 중장년" />
      <meta name="description" content="진짜 시니어를 위한 일자리" />
      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey={KAKAO_MAP}"
      ></script>
    </Head>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  </>
);

export default wrapper.withRedux(MyApp);
