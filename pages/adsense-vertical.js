import React, { useEffect } from "react";

export default function AdsenseVertical() {
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
      style={{ display: "block" }}
      data-ad-client="ca-pub-3035659895284849"
      data-ad-slot="3584842040"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}