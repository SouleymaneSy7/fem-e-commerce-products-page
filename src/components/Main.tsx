import { Images } from "@/constants";
import Products from "./Products";
import MobileCarouselSlider from "./MobileCarouselSlider";
import LightBoxContainer from "./LightBoxContainer";

const Main = () => {
  return (
    <main className="main | container">
      <MobileCarouselSlider sliderImages={Images} />
      <LightBoxContainer productImages={Images} />
      <Products />
    </main>
  );
};

export default Main;
