import PhotoCarousel from "./Main/PhotoCarousel";
import ProductData from "./ProductData";
function MainPage() {
  return (
    <>
        <div className="block lg:flex justify-between lg:mr-[20%]">
        <PhotoCarousel />
        <ProductData />
        </div>
    </>
  );
}
export default MainPage;
