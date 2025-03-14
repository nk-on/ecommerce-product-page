import photos from "./photos";
import Photo from "./Photo";
import { useContext, useState } from "react";
import OverlayContext from "../Context";
interface OverLayProps {
  mainImage: string;
  setMainImage: React.Dispatch<React.SetStateAction<string>>;
}
function OverLay({ mainImage, setMainImage }: OverLayProps) {
  const { setExpanded } = useContext(OverlayContext);
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div className="hidden fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-20 cursor-pointer lg:flex flex-col justify-center items-center">
      <div
        className=' w-[20px] h-[20px] ml-[35%]'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={()=> setExpanded(false)}
        style={{
          backgroundImage:hovered ? 'url(public/IconClose-hovered.svg)' : 'url(public/iconClose.svg)'
        }}
      ></div>
      <img src={`${mainImage}`} className="w-[550px] h-[550px] rounded-[15px]"></img>
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
  );
}
export default OverLay;
