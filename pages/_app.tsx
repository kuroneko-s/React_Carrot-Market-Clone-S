import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import useUser from "@libs/client/useUser";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("App is running");

  return (
    <SWRConfig
      value={{
        refreshInterval: 10000,
        fetcher: (url: any) => fetch(url).then((response) => response.json()),
      }}
    >
      <div className="w-full max-w-xl mx-auto">
        <Component {...pageProps} />
      </div>

      {/* 
  beforeInteractive - 페이지를 불러오기 전에 불러옴 - 1 ( 이건 _document에서만 사용하라고 경고나오네 )
  afterInteractive - 페이지를 다 불러온 후에 불러옴 - 2
  lazyOnload - 다른 모든 데이터나 소스들을 불러온 후 불러옴 - 3
*/}
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="lazyOnload"
      />

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        onLoad={() => {
          // @ts-ignore
          window.fbAsyncInit = function () {
            // @ts-ignore
            FB.init({
              appId: "your-app-id",
              autoLogAppEvents: true,
              xfbml: true,
              version: "v14.0",
            });
          };
        }}
      />
    </SWRConfig>
  );
}

export default MyApp;
