import {
  GalleryImg1,
  GalleryImg2,
  GalleryImg3,
  GalleryImg4,
} from "../constants";
import { Icons } from "./Icons";

const HoverEffect = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-golden group opacity-0 hover:opacity-70 cursor-pointer duration-500 flex justify-center items-center">
      <Icons.HiXMark
        strokeWidth={50}
        width={100}
        height={100}
        color="white"
        className="opacity-100 rotate-0 group-hover:-rotate-90 duration-700 group-hover:stroke-1"
      />
    </div>
  );
};

const GalleryItem = (imgName: string, index: number) => {
  return (
    <div className="relative group overflow-hidden" key={index}>
      <img
        src={imgName}
        width={477}
        height={477}
        alt="Image 1"
        className="group-hover:scale-110 duration-500 text-white"
      />
      <HoverEffect />
    </div>
  );
};
const Gallery = () => {
  return (
    <section>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-4">
        {[GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg4].map((img, idx) =>
          GalleryItem(img, idx)
        )}
      </div>
    </section>
  );
};

export default Gallery;
