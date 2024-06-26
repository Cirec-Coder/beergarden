import { ComponentPropsWithoutRef } from "react";
import { cn } from "../lib/utils";


type ReadMoreButtonProps = ComponentPropsWithoutRef<"a">;
const ReadMoreButton = ({
  children,
  className,
  ...rest
}: ReadMoreButtonProps) => {
  return (
    <div className="flex justify-center items-center">
      <a
        {...rest}
        className={cn(
          "bg-golden text-lg m-5 p-2 px-10 font-normal text-white rounded-md hover:bg-golden-100 duration-300",
          className
        )}
      >
        {children}
      </a>
    </div>
  );
};

const Tradition = () => {
  return (
    <section
      className="w-full font-['Raleway']"
      id="tradition"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="py-10 text-[clamp(1.5rem,4vw+1rem,5rem)] leading-[1.5] font-[900] flex flex-col justify-center items-center">
          <h1 className="">BEER TRADITION</h1>
          <h2 className="subtitle">
            Tons of shortcodes provide countless options
          </h2>
          <p className="text-center font-normal text-[0.45em] lg:text-[1.25rem] mx-16 my-4">
            Edge Themes give you everything you need to create an amazing
            website. Designed and built with care, filled with creative elements
            and useful options, and completely user-friendly. Set up your
            website quickly and with ease. From image galleries to various
            interactive features you can mix and match all elements.
          </p>
          <ReadMoreButton
            href="#"
            target="_self"
          >
            Read More
          </ReadMoreButton>
        </div>
        <div className="flex justify-center items-center bg-holder1 bg-cover">
          <img
            className="p-20"
            width={960}
            height={600}
            src="src/assets/images/h5-holder-image-1.png"
            alt="holder-1"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center bg-holder2 bg-cover">
          <img
            className="p-20"
            width={960}
            height={600}
            src="src/assets/images/h5-holder-image-2.png"
            alt="holder-1"
          />
        </div>
        <div className="py-10 text-[clamp(1.5rem,4vw+1rem,5rem)] leading-[1.5] font-[900] flex flex-col justify-center items-center">
          <h1>PUB STORY</h1>
          <h2 className="subtitle">
            Tons of shortcodes provide countless options
          </h2>
          <p className="text-center font-normal text-base mx-16 my-4">
            Edge Themes give you everything you need to create an amazing
            website. Designed and built with care, filled with creative elements
            and useful options, and completely user-friendly. Set up your
            website quickly and with ease. From image galleries to various
            interactive features you can mix and match all elements.
          </p>
          <ReadMoreButton
            href="#"
            target="_self"
          >
            Read More
          </ReadMoreButton>
        </div>
      </div>
    </section>
  );
};

export default Tradition;
