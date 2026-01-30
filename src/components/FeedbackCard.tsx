import { images, ProfileList } from "../constant/Data";
import Footer from "./Footer";
import UserInputBox from "./UserInputBox";

const FeedbackCard = () => {
  return (
    <div className="relative flex flex-col mt-3 md:mt-10 w-full">
      <div className="mx-auto w-full md:w-[90%] mb-35 md:mb-60 p-4 md:p-0">
        <img src={images.QuoteIcon} alt="quote icon" className="w-8 h-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-8 w-full flex-wrap px-6 text-slate-100 mt-2 cursor-pointer">
          {ProfileList.map((item) => (
            <div
              key={item.id}
              className="bg-slate-700 rounded-xl p-6 space-y-4 border border-slate-300/80"
            >
              <p className="font-sans font-light text-xs md:text-base">{item.info}</p>
              <div className="flex space-x-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col">
                  <h1 className="font-semibold font-sans">{item.name}</h1>
                  <span className="text-xs text-slate-400">{item.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute w-[95%] md:w-[45%] bottom-74 md:bottom-68 left-1/2 transform -translate-x-1/2">
        <UserInputBox />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FeedbackCard;
