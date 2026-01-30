import { useEffect, useState } from "react";
import { images } from "../constant/Data";
import Button from "./Button";

const HomePage = () => {
  const [mobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        console.log("true");
      } else {
        setIsMobile(false);
        console.log("fale");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobile]);

  return (
    <div className="flex flex-col items-center w-ful md:p-0 ">
      <div className="flex w-full justify-center">
        <img
          src={images.HomePageImg}
          alt="Home page image"
          className="object-cover w-full md:w-[40%] object-center mt-0 md:mt-12 p-6 md:p-0"
        />
      </div>
      <div className="relative w-full flex flex-col items-center mt-5 md:mt-18">
        <div className="absolute flex flex-col justify-center items-center text-white space-y-5 md:space-y-12 w-full md:w-[45%]">
          <h1 className="font-semibold md:font-bold text-xl md:text-4xl text-wrap text-center">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="text-center text-wrap text-xs md:text-base">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <Button className="w-60">Get Started</Button>
        </div>
        {mobile ? (
          <img
            src={images.BgCurvyMobile}
            alt="background image"
            className="w-full object-cover object-center bottom-0"
          />
        ) : (
          <img
            src={images.BgCurvyDesktop}
            alt="background image"
            className="w-full object-cover object-center bottom-0"
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
