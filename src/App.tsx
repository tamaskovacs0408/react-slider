import img1 from '/image-1.jpg';
import img2 from '/image-2.jpg';
import img3 from '/image-3.jpg';
import img4 from '/image-4.jpg';
import img5 from '/image-5.jpg';

const IMAGES = [img1, img2, img3, img4, img5];

import ImageSliderFirst from "./components/ImageSliderFirst"


function App() {

  return (
    <>
      <ImageSliderFirst imageUrls={IMAGES} />
    </>
  )
}

export default App
