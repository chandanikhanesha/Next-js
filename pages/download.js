import React from "react";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
export default function Download() {
  return (
    <div>
      <Image
        loader={myLoader}
        src="me.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
}
