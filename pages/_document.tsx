/** @format */

import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Document() {
  return (
    <Html onScroll={() => console.log("d")}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-B840N99HCC"
        ></Script>
        {/* <Script strategy="beforeInteractive">
          {`if (!window.location.host.startsWith("www")){
                        window.location = window.location.protocol + "//" + "www." + window.location.host + window.location.pathname;
                    }`}
        </Script> */}
        <Script strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-B840N99HCC');`}
        </Script>
        <link
          key="preconnect"
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          key="crossorigin"
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href={`.${asset_prefix}/styles/global.css`} rel="stylesheet" />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16"
          href={`.${asset_prefix}/favicon.ico`}
        />
        <style>{`body { background-color: #191b2b; }`}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
