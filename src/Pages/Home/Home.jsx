import Banner from "./Home-Components/Banner/Banner";
import FeaturesText from "./Home-Components/Featurestest/FeaturesText";
import Promotionals from "./Home-Components/promotional/Promotionals";
import WeProvide from "./Home-Components/WeProvide/WeProvide";
import Testiminials from "./Home-Components/testimonial/Testiminials";
import Recoment from "./Home-Components/Recoment/Recoment";


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
    <div>
    <Promotionals></Promotionals>
    </div>
    <div>
    <Recoment></Recoment>
    </div>
    <div>
<Testiminials></Testiminials>    
</div>


    </div>
  );
};

export default Home;