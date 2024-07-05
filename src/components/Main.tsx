import { Images } from "@/constants";
import MobileCarouselSlider from "./MobileCarouselSlider";
import Products from "./Products";

const Main = () => {
  return (
    <main className="main | container">
      <MobileCarouselSlider sliderImages={Images} />
      <Products />
    </main>
  );
};

export default Main;
