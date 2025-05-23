interface ButtonProps {
  status: string;
  url: string;
  top: number;
  left: number;
}
import { useContext, useEffect } from "react";
import OverlayContext from "../Context";
import photos from "../Main/photos";
function Button({ url, top, left, status}: ButtonProps) {
  const {setMainImage,dispatch,state,expanded,setOverLayImage } = useContext(OverlayContext);
  useEffect(()=>{
    if(expanded){
      setOverLayImage(photos[state.photoCount].photo)
    }else{
      setMainImage(photos[state.photoCount].photo)
    }
  },[state])
  return (
    <div
      className={`lg:w-[56px] lg:h-[56px] w-[40px] h-[40px] bg-[#FFFF] absolute  left-[${left}%] top-[${top}%] bottom-[50%] ${
        left === 0 && "right-0"
      } translate-y-[50%]  rounded-[50%] flex justify-center items-center cursor-pointer`
    }
    onClick={()=> dispatch({type:status})}
    >
      <img src={url}></img>
    </div>
  );
}
export default Button;
