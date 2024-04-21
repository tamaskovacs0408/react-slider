import { useState } from "react";
import { ImageSliderProps } from "../types";

import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from "lucide-react";

import "./sliders.scss";

function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function handleNextImage() {
    setImageIndex(index => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function handlePreviousImage() {
    setImageIndex(index => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <div className='flex flex-col justify-center items-center w-full h-full relative'>
      <div className='w-full h-full flex max-w-750 overflow-hidden'>
        {imageUrls.map(img => (
          <img
            key={img.url}
            src={img.url}
            alt={img.alt}
            className='block object-cover w-full h-full max-w-750 shrink-0 grow-0 transition-translate duration-300 ease-in-out'
            style={{ translate: `-${100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        className='sldrbtn bg-white absolute first-line:absolute block top-2/5 left-0 p-0 h-full rounded-none hover:bg-sliderbutton hover:outline focus-visible:bg-sliderbutton transition-all'
        onClick={handlePreviousImage}
        aria-label='View Previous Image'
      >
        <ArrowBigLeft className='w-8' viewBox='0 0 20 20' />
      </button>
      <button
        className='sldrbtn bg-white absolute block top-2/5 right-0 p-0 h-full rounded-none hover:bg-sliderbutton hover:outline focus-visible:bg-sliderbutton transition-all'
        onClick={handleNextImage}
        aria-label='View Next Image'
      >
        <ArrowBigRight className='w-8' viewBox='0 0 20 20' />
      </button>
      <div className='flex justify-center items-center gap-2 absolute bottom-5 translate-y-1/2 w-full'>
        {imageUrls.map((_, index) => (
          <button
            className=''
            onClick={() => setImageIndex(index)}
            key={index}
            aria-label={`View Image ${index + 1}`}
          >
            {index === imageIndex ? (
              <CircleDot className='fill-sliderbutton' viewBox='0 0 25 25' />
            ) : (
              <Circle
                className='fill-sliderbutton hover:scale-110 focus-visible:scale-110 focus-visible:outline transition-all'
                viewBox='0 0 25 25'
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
