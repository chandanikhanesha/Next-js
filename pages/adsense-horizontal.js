import React, { useEffect } from "react";

export default function AdsenseHorizontal() {
  const loadAds = () => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log("adsense error", error.message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return (
    <ins
        className="adsbygoogle"
        style={{ display: "inline-block", width: "740px", height: "100px"}}
        data-ad-client="ca-pub-3035659895284849"
        data-ad-slot="8148464089"
    ></ins>
  );

}