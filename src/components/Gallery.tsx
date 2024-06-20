import { HiXMark } from "react-icons/hi2";
import {
  GalleryImg1,
  GalleryImg2,
  GalleryImg3,
  GalleryImg4,
} from "../constants";

const HoverEffect = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-golden group opacity-0 hover:opacity-70 cursor-pointer duration-500 flex justify-center items-center">
      <HiXMark
        size={100}
        color="white"
        className="opacity-100 rotate-45 group-hover:-rotate-45 duration-700"
      />
    </div>
  );
};
const Gallery = () => {
  return (
    <section>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-4">
        <div className="relative group overflow-hidden">
          <img
            src={GalleryImg1}
            alt="mage 1"
            className="group-hover:scale-110 duration-500"
          />
          <HoverEffect />
        </div>
        <div className="relative group overflow-hidden">
          <img
            src={GalleryImg2}
            alt="image 2"
            className="group-hover:scale-110 duration-500"
          />
          <HoverEffect />
        </div>
        <div className="relative group overflow-hidden">
          <img
            src={GalleryImg3}
            alt=""
            className="group-hover:scale-110 duration-500"
          />
          <HoverEffect />
        </div>
        <div className="relative group overflow-hidden">
          <img
            src={GalleryImg4}
            alt=""
            className="group-hover:scale-110 duration-500"
          />
          <HoverEffect />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
