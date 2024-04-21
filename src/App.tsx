import img1 from "/image-1.jpg";
import img2 from "/image-2.jpg";
import img3 from "/image-3.jpg";
import img4 from "/image-4.jpg";
import img5 from "/image-5.jpg";

const IMAGES = [
  { url: img1, alt: "Forrest road" },
  { url: img2, alt: "Autumn forrest road" },
  { url: img3, alt: "Snowy mountain peak" },
  { url: img4, alt: "Sunset behind tree" },
  { url: img5, alt: "Beach with a boat" },
];

// import ImageSliderFirst from "./components/ImageSliderFirst"
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <main className='mt-3 max-w-1200 w-full h-500 flex justify-center items-center'>
      <ImageSlider imageUrls={IMAGES} />
    </main>
  );
}

export default App;
