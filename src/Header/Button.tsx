interface ButtonProps {
  url:string,
  top:number,
  left:number
}
function Button({ url,top,left }:ButtonProps) {
  return (
    <div className={`lg:w-[56px] lg:h-[56px] w-[40px] h-[40px] bg-[#FFFF] absolute left-[${left}%] top-[${top}%] bottom-[50%] ${left === 0 && 'right-0'} translate-y-[50%] lg:hidden  rounded-[50%] flex justify-center items-center cursor-pointer`}>
      <img src={url}></img>
    </div>
  );
};
export default Button;