// import "../styles/globals.css";

// import { useRouter } from "next/router";

// function MyApp({ Component, pageProps }) {
//   const router = useRouter();
//   return <Component key={router.asPath} {...pageProps} />;
// }

// export default MyApp;

import "../styles/globals.css";
import Script from "next/script";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  
  return <div>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=G-G98H7F44RG`}
    />

    <Script strategy="lazyOnload">
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G98H7F44RG', {
              page_path: window.location.pathname,
            });
                `}
    </Script>
    <Component key={router.asPath} {...pageProps} />
  </div>
}

export default MyApp;
