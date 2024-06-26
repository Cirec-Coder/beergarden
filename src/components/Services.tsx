import { Icons } from "./Icons";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-20"
    >
      <div className="flex justify-center items-center gap-20 flex-wrap">
        <div className="flex flex-col items-center justify-center group w-1/2 sm:w-1/3 lg:w-1/6">
          <Icons.H5Icon1
            width={100}
            height={100}
            className="w-24 h-24 group-hover:bg-golden-100 rounded-full duration-1000"
          />
          <h2 className="text-xl font-bold group-hover:text-golden-100 duration-300">
            SETCH IS THE FIRST
          </h2>
          <p className="text-center leading-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ipsum a explicabo soluta. Consequuntur?
          </p>
        </div>
        <div className="flex flex-col items-center justify-center group w-1/2 sm:w-1/3 lg:w-1/6">
          <Icons.H5Icon2
            width={100}
            height={100}
            className="w-24 h-24 group-hover:bg-golden-100 rounded-full duration-1000"
          />
          <h2 className="text-xl font-bold group-hover:text-golden-100 duration-300">
            SECOND CHANCE
          </h2>
          <p className="text-center leading-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ipsum a explicabo soluta. Consequuntur?
          </p>
        </div>
        <div className="flex flex-col items-center justify-center group w-1/2 sm:w-1/3 lg:w-1/6">
          <Icons.H5Icon3
            width={100}
            height={100}
            className="w-24 h-24 group-hover:bg-golden-100 rounded-full duration-1000"
          />
          <h2 className="text-xl font-bold group-hover:text-golden-100 duration-300">
            TEST IT ALL
          </h2>
          <p className="text-center leading-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ipsum a explicabo soluta. Consequuntur?
          </p>
        </div>
        <div className="flex flex-col items-center justify-center group w-1/2 sm:w-1/3 lg:w-1/6">
          <Icons.H5Icon4
            width={100}
            height={100}
            className="w-24 h-24 group-hover:bg-golden-100 rounded-full duration-1000"
          />
          <h2 className="text-xl font-bold group-hover:text-golden-100 duration-300">
            REFRESH YOUR TIME
          </h2>
          <p className="text-center leading-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ipsum a explicabo soluta. Consequuntur?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
