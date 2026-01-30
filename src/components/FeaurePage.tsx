import { FeatureLists, images } from "../constant/Data";

const FeaturePage = () => {
  return (
    <div className="flex flex-col mx-auto w-full md:w-[90%] items-center mt-15 md:mt-0">
      <div className="grid flex-wrap grid-cols-1 md:grid-cols-2 md:w-[58%] w-full h-[40%] md:h-[60%] gap-10 md:gap-20 justify-center">
        {FeatureLists.map((item) => (
          <div
            className="flex flex-col  items-center w-full p-4 space-y-3"
            key={item.id}
          >
            <img
              src={item.icon}
              alt={item.alt}
              className="w-18 h-18 object-contain object-center"
            />
            <h1 className="text-gray-100 font-sans font-semibold text-xl">
              {item.title}
            </h1>
            <p className="text-gray-400 text-xs text-center">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="md:flex flex flex-col items-center w-full md:w-[90%] mt-14 md:mt-18">
        <div className="flex flex-col items-center space-y-3 md:space-x-5 text-slate-100 w-full p-4 md:p-0">
          <img
            src={images.StayProductive}
            alt="Stay Productive"
            className="object-contain w-full md:w-[60%]"
          />
          <div className="flex w-full md:w-[40%] flex-col space-y-6">
            <h1 className="font-bold font-sans text-center text-xl md:text-5xl">
              Stay productive, wherever you are
            </h1>
            <p className="text-slate-400">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <div className="flex flex-col items-start pb-1 text-sky-700  cursor-pointer">
              <div className="flex items-center space-x-2">
                <span className="flex items-center">See how Fylo works </span>
                <img
                  src={images.ArrowIcon}
                  alt="Arrow icon"
                  className="w-5 h-5"
                />
              </div>
              <span className="w-41 mt-1 h-0.5 bg-sky-700"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;
