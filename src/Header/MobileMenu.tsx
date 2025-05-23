interface MobileMenuProps {
  menuItems: string[];
  setMenuItemClicked: React.Dispatch<React.SetStateAction<boolean>>;
}
function MobileMenu({ menuItems, setMenuItemClicked }: MobileMenuProps) {
  return (
    <div className="w-[100vw]  fixed h-full top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-[990] lg:hidden">
      <div className="bg-[#fff] w-[60%] h-[100%] ">
        <img src="./Icon-close-dark.svg" alt="close-icon" className="relative left-[10%] top-[1%]" onClick={()=> setMenuItemClicked(false)}/>
        <ul className="flex flex-col ml-[10%] pt-[30px] ">
          {menuItems.map((item) => (
            <li className="font-bold">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default MobileMenu;
