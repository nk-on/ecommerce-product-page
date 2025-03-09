import { useState } from "react";

interface photoProps {
  url: string;
  urlThumbNail: string;
  setMainImage: React.Dispatch<React.SetStateAction<string>>;
}
function Photo({ url, urlThumbNail, setMainImage }: photoProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      className={` w-[88px] h-[88px] cursor-pointer rounded-[10px] border-[2px] hover:border-[#FF7E1B]`}
      style={{
        backgroundImage: `${
          hovered
            ? `linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url(${urlThumbNail})`
            : `url(${urlThumbNail})`
        }`,
        backgroundSize: "cover",
        backgroundPosition:'center'
        
      }}
      onClick={() => setMainImage(url)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    ></div>
  );
}
export default Photo;
