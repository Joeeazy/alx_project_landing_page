import "./App.css";
import About from "./components/About.jsx";
import Banner from "./components/Banner";
import Community from "./components/Community";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Join from "./components/Join";
import Pricing from "./components/Pricing";
import Workouts from "./components/Workouts";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer />
      <div className="h-[4000px]"></div>
    </div>
  );
}

export default App;
