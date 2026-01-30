import { images } from "../constant/Data";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-slate-800 h-100 text-white w-full pt-25">
      <div className="w-[90%] mx-auto flex flex-col">
        <img
          src={images.Logo}
          alt="Logo"
          className="object-contain w-30 h-30"
        />
        <div className="flex-col md:flex-row flex gap-5">
          <div className="flex flex-15">
            <div className="flex space-x-4">
              <img
                src={images.LocationIcon}
                alt="location icon"
                className="w-6 h-6"
              />
              <p className="text-xs md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                cumque facere delectus consequuntur, tempora sit dolorem hic.
              </p>
            </div>
          </div>
          <div className="grow-3 space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={images.PhoneIcon}
                alt="phone icon"
                className="w-5 h-5"
              />
              <span>+1-543-123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src={images.EmailIcon}
                alt="email icon "
                className="w-5 h-4"
              />
              <span>akmh@example.com</span>
            </div>
          </div>
          <div className="grow-2 flex space-x-5 underline  md:flex-col md:space-y-3 items-start">
            <span>About Us</span>
            <span>Jobs</span>
            <span>Press</span>
            <span>Blog</span>
          </div>
          <div className="grow-2 flex space-x-5 underline md:flex-col space-y-3">
            <span>Contact Us</span>
            <span>Terms</span>
            <span>Privacy</span>
          </div>
          <div className="grow-2 flex space-x-3 justify-center">
            <FaFacebook className="w-6 h-6" />
            <AiFillTwitterCircle className="w-6 h-6" />
            <AiFillInstagram className="w-6 h-6" />
          </div>
        </div>
        <span className="text-slate-500 text-center p-2">akmh©2026 copyright</span>
      </div>

    </div>
  );
};

export default Footer;
