import { useState } from "react";
import photos from "./photos";
import Photo from "./Photo";
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
          <div className="lg:w-[56px] lg:h-[56px] w-[40px] h-[40px] bg-[#FFFF] absolute left-[90%] top-[50%]   lg:hidden  rounded-[50%] flex justify-center items-center cursor-pointer ">
            <img src="public/icon-next.svg" ></img>
          </div>
          <div className="lg:w-[56px] lg:h-[56px] w-[40px] h-[40px] bg-[#FFFF] absolute top-[50%]  lg:hidden flex justify-center items-center rounded-[50%] cursor-pointer ">
            <img src="public/icon-previous.svg"></img>
          </div>
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
