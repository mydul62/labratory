import Banner from "./Home-Components/Banner/Banner";
import FeaturesText from "./Home-Components/Featurestest/FeaturesText";
import WeProvide from "./Home-Components/WeProvide/WeProvide";

const Home = () => {
  return (
    <div className=" ">
    <div className=" min-h-[700px]">
    <Banner></Banner>
    </div>
    <div>
    <WeProvide></WeProvide>
    </div>
    <div className=" py-12">
    <FeaturesText />
    </div>
    </div>
  );
};

export default Home;