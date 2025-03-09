import { useState } from "react";

interface photoProps {
  url: string;
  urlThumbNail: string;
  setMainImage: React.Dispatch<React.SetStateAction<string>>;
}
const photos = [
  {
    id: 0,
    photo: "public/image-product-1.jpg",
    photoThumbnail: "public/image-product-1-thumbnail.jpg",
  },
  {
    id: 1,
    photo: "public/image-product-2.jpg",
    photoThumbnail: "public/image-product-2-thumbnail.jpg",
  },
  {
    id: 2,
    photo: "public/image-product-3.jpg",
    photoThumbnail: "public/image-product-3-thumbnail.jpg",
  },
  {
    id: 3,
    photo: "public/image-product-4.jpg",
    photoThumbnail: "public/image-product-4-thumbnail.jpg",
  },
];
function Photo({ url, urlThumbNail, setMainImage }: photoProps) {
  return (
    <div
      className={` w-[88px] h-[88px] cursor-pointer rounded-[10px] border-[2px] hover:border-[#FF7E1B]`}
      style={{ background: `url(${urlThumbNail})`, backgroundSize: "cover" }}
      onClick={() => setMainImage(url)}
    ></div>
  );
}
function PhotoCarousel() {
  const [mainImage, setMainImage] = useState<string>("public/image-product-1.jpg");
  return (
    <>
      <div className=" flex flex-col gap-[20px] lg:mt-[50px] lg:ml-[40px] lg:w-[445px] lg:h-[445px]  ">
        <div
          className="lg:w-[100%] lg:h-[140%]  h-[300px] w-[100%] lg:rounded-[15px]"
          style={{ backgroundImage: `url(${mainImage})`, backgroundSize: "cover", backgroundPosition:'center' }}
        ></div>
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
