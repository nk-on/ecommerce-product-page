interface photoProps {
  url: string;
  urlThumbNail: string;
  setMainImage: React.Dispatch<React.SetStateAction<string>>;
}
function Photo({ url, urlThumbNail, setMainImage }: photoProps) {
  return (
    <div
      className={` w-[88px] h-[88px] cursor-pointer rounded-[10px] border-[2px] hover:border-[#FF7E1B]`}
      style={{ background: `url(${urlThumbNail})`, backgroundSize: "cover" }}
      onClick={() => setMainImage(url)}
    ></div>
  );
}
export default Photo;
