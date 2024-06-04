import Banner from "./Home-Components/Banner/Banner";
import FeaturesText from "./Home-Components/Featurestest/FeaturesText";

const Home = () => {
  return (
    <div className=" ">
    <div className=" min-h-[700px]">
    <Banner></Banner>
    </div>
    <div className=" py-12">
    <FeaturesText />
    </div>
    </div>
  );
};

export default Home;