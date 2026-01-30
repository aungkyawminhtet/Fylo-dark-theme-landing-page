import "./App.css";
import HomePage from "./components/HomePage";
import FeaturePage from "./components/FeaurePage";
import Navbar from "./components/Navbar";
import AnimateWrapper from "./components/AnimateWrapper";
import FeedbackCard from "./components/FeedbackCard";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-y-auto bg-slate-800">
      <AnimateWrapper>
        {/* Navbar */}
        <Navbar />
        {/* HomePage */}
        <HomePage />
        <div className="flex flex-col bg-[#191e2b]">
          {/* Feature Page */}
          <FeaturePage />
          {/* Feedback Card */}
          <FeedbackCard />
          {/* Footer */}
          {/* <Footer /> */}
        </div>
      </AnimateWrapper>
    </div>
  );
}

export default App;
