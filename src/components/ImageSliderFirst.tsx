import { useState } from "react";
import { ImageSliderProps } from "../types";

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

function ImageSliderFirst({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function handleNextImage() {
    setImageIndex(index => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1
    })
  }

  function handlePreviusImage() {
    setImageIndex(index => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1
    })
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full relative">
      <img src={imageUrls[imageIndex]} className="object-cover w-full h-full max-w-750 transition-opacity duration-500 ease-in-out" />
      <button className="bg-white absolute first-line:absolute block top-2/5 left-0 p-0 h-full rounded-none hover:bg-sliderbutton transition-all" onClick={handlePreviusImage}>
          <ArrowBigLeft className="w-8" viewBox="0 0 20 20"/>
        </button>
        <button className="bg-white absolute block top-2/5 right-0 p-0 h-full rounded-none hover:bg-sliderbutton transition-all" onClick={handleNextImage}>
          <ArrowBigRight className="w-8" viewBox="0 0 20 20"/>
        </button>
    </div>
  );
}

export default ImageSliderFirst;
