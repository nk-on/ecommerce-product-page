import photos from "./photos";
import Photo from "./Photo";
import { useContext, useState } from "react";
import OverlayContext from "../Context";
import Button from "../Header/Button";
import buttons from "./Buttons";
function OverLay() {
  const {overlayImage, setOverLayImage, setExpanded} = useContext(OverlayContext)
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div className="hidden fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-20 cursor-pointer lg:flex flex-col justify-center items-center">
      <div
        className='w-[20px] h-[20px] ml-[35%]'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={()=> setExpanded(false)}
        style={{
          backgroundImage:hovered ? 'url(public/IconClose-hovered.svg)' : 'url(public/iconClose.svg)'
        }}
      >
      </div>
      <div className="relative w-[550px] h-[550px] rounded-[15px]" style={{background:`url(${overlayImage})`,backgroundSize:'cover'}}>
      {buttons.map(button =><Button url={button.url} left={button.left} top={button.top} status = {button.status} />)}
      </div>
      <div className="lg:flex justify-between hidden ">
        {photos.map((photo) => (
          <Photo
            url={photo.photo}
            urlThumbNail={photo.photoThumbnail}
            setMainImage={setOverLayImage}
            key={photo.id}
          />
        ))}
      </div>
    </div>
  );
}
export default OverLay;
