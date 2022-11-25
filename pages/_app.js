// import "../styles/globals.css";

// import { useRouter } from "next/router";

// function MyApp({ Component, pageProps }) {
//   const router = useRouter();
//   return <Component key={router.asPath} {...pageProps} />;
// }

// export default MyApp;

import "../styles/globals.css";
import Script from "next/script";
import { Helmet } from "react-helmet";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      {/* <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=G-G98H7F44RG`}
    /> */}

      <Helmet>
        <script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KJ6QQWD');`,
          }}
        ></script>

        <script     strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof (url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-10835311766/S_BWCNDCj4MYEJb51q4o',
              'event_callback': callback
            });
            return false;
          }
        `}}>


        </script>

        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10835311766"></script>
        <script  strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html:
          ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'AW-10835311766')`
          }}>
         
        </script>
      
      </Helmet>

      {/* <Script strategy="lazyOnload"></Script> */}
      <Component key={router.asPath} {...pageProps} />
    </>
  );
}

export default MyApp;
