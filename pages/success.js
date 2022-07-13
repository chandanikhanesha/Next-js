import React, { useEffect, useState } from "react";

import imageCompression from "browser-image-compression";
import Image from "next/image";
import { useRouter } from "next/router";
export default function success() {
  const [compressData, setcompressData] = useState([]);

  const query = useRouter();
  useEffect(() => {
    console.log(JSON.parse(query.query.orignalData), "---------");
    const data = query && JSON.parse(query.query.orignalData);
    setcompressData(data);
  }, [query]);

  console.log(compressData, "compressData");
  return <div>success</div>;
}
