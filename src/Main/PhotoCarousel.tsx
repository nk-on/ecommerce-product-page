interface photoProps {
  url: string;
  urlThumbNail: string;
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
function Photo({ url, urlThumbNail }: photoProps) {
  return (
    <div
      className={` w-[88px] h-[88px] cursor-pointer rounded-[10px]`}
      style={{ background: `url(${urlThumbNail})`, backgroundSize: "cover" }}
    ></div>
  );
}
function PhotoCarousel() {
  return (
    <>
      <div className=" flex flex-col gap-[20px] lg:mt-[50px] lg:ml-[40px] lg:w-[445px] lg:h-[445px]  ">
        <div className="bg-[url(public/image-product-1.jpg)] bg-cover bg-no-repeat lg:w-[100%] lg:h-[140%]  h-[300px] w-[100%] lg:rounded-[15px]"></div>
        <div className="lg:flex justify-between hidden ">
          {photos.map((photo) => (
            <Photo url={photo.photo} urlThumbNail={photo.photoThumbnail} key={photo.id} />
          ))}
        </div>
      </div>
    </>
  );
}
export default PhotoCarousel;
