import Button from "./Button";

const UserInputBox = () => {
  return (
    <div className="w-full bg-slate-700 text-white p-3 md:p-5 flex flex-col items-center space-y-3 md:space-y-5 rounded-xl border border-slate-300/80">
      <h1 className="font-bold font-sans text-2xl md:text-3xl select-none">Get early access today</h1>
      
        <p className="w-[90%] text-xs md:text-base text-center select-none">
          It only takes a minute to sign up and our free starter tier is
          extremely generous.
        </p>
     
      <div className="flex flex-col md:flex-row space-x-2 w-full gap-3">
        <input
          type="text"
          className="bg-slate-300 flex-1 rounded-full px-4 py-2 text-black ring-offset-0 outline-none"
          placeholder="email@example.com"
        />
        <Button>Get Started For Free</Button>
      </div>
    </div>
  );
};

export default UserInputBox;
