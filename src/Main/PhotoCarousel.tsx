import { useEffect, useState } from "react";
import photos from "./photos";
import Photo from "./Photo";
import Button from "../Header/Button";
import buttons from "./Buttons";
import { useContext } from "react";
import OverlayContext from "../Context";
import OverLay from "./Overlay";
function PhotoCarousel() {
  function handleResize() {
    if (window.innerWidth < 425) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }
  const { mainImage, setMainImage } = useContext(OverlayContext);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 425);
  const { expanded, setExpanded } = useContext(OverlayContext);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <>
      {expanded && <OverLay />}
      <div className=" flex flex-col gap-[20px] lg:mt-[50px] lg:ml-[40px] lg:w-[445px] lg:h-[445px]">
        <div
          className=" relative lg:w-[100%] lg:h-[140%]  h-[300px] w-[100%] lg:rounded-[15px] cursor-pointer"
          style={{
            backgroundImage: `url(${mainImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {isMobile &&
            buttons.map((button, id) => (
              <Button
                key={id}
                url={button.url}
                left={button.left}
                top={button.top}
                status={button.status}
              />
            ))}
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
