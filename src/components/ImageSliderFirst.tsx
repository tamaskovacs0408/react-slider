import { useState } from "react";
import { ImageSliderProps } from "../types";

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

function ImageSliderFirst({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full relative">
      <img src={imageUrls[imageIndex]} className="object-cover w-full h-full" />
      <button className="bg-transparent absolute block top-2/5 left-0 p-0 h-full">
          <ArrowBigLeft className="w-8" viewBox="0 0 20 20"/>
        </button>
        <button className="bg-transparent absolute block top-2/5 right-0 p-0 h-full">
          <ArrowBigRight className="w-8" viewBox="0 0 20 20"/>
        </button>
    </div>
  );
}

export default ImageSliderFirst;
