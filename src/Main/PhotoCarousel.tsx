import { useState } from "react";
import photos from "./photos";
import Photo from "./Photo";
import Button from "../Header/Button";
import buttons from "./Buttons";
function PhotoCarousel() {
  const [mainImage, setMainImage] = useState<string>("public/image-product-1.jpg");
  return (
    <>
      <div className=" flex flex-col gap-[20px] lg:mt-[50px] lg:ml-[40px] lg:w-[445px] lg:h-[445px]">
        <div
          className=" relative lg:w-[100%] lg:h-[140%]  h-[300px] w-[100%] lg:rounded-[15px]"
          style={{
            backgroundImage: `url(${mainImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {
            buttons.map(button => <Button url={button.url} left={button.left} top = {button.top} />)
          }
        </div>
        <div className="lg:flex justify-between hidden ">
          {photos.map((photo) => (
            <Photo
              url={photo.photo}
              urlThumbNail={photo.photoThumbnail}
              setMainImage={setMainImage}
              key={photo.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default PhotoCarousel;
