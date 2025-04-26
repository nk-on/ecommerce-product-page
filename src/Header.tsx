import { useContext, useState } from "react";
import OverlayContext from "./Context";
import Cart from "./Header/Cart";
import MobileMenu from "./Header/MobileMenu";
function Header() {
  const menuItems: string[] = ["Collections", "Men", "Women", "About", "Contact"];
  const [profilePicClicked, setProfilePicClicked] = useState<boolean>(false);
  const [menuItemClicked, setMenuItemClicked] = useState<boolean>(false);
  const { state } = useContext(OverlayContext);
  return (
    <>
     {menuItemClicked && <MobileMenu setMenuItemClicked = {setMenuItemClicked} menuItems = {menuItems} />}
      <div className="flex justify-between  lg:w-[90%] w-full h-[50px] mt-[70px] pb-[30px] border-[#E4E9F2] border-b">
        <div>
          <nav className="flex w-[90%] gap-[30px] px-[10px]">
            <img src="/public/icon-menu.svg" alt="menu-icon" className="lg:hidden block" onClick={()=> setMenuItemClicked(true)} />
            <img src="public/logo.svg" alt="sneakers" className="w-[137.5px] h-[20px]" />
            <ul className="lg:flex justify-between w-[60%] gap-[30px] hidden">
              {menuItems.map((item) => (
                <li className="text-[#69707D] text-[15px] cursor-pointer border-[#FF7E1B]  hover:border-b-[4px]">
                  <div className="pb-[20px]">{item}</div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex justify-between items-center lg:w-[9%] w-[15%] h-full">
          <div className="  w-[19px] h-[13px] bg-[#FF7E1B] rounded-[6.5px] relative lg:left-[45px] left-[50%] bottom-[7px] text-[10px] text-[#fff] flex justify-center items-center font-bold">
            {state.productCount}
          </div>
          <img
            src="/public/Cart-dark.svg"
            alt="icon-cart"
            className="w-[21.82px] h-[20px] cursor-pointer"
            onClick={() => setProfilePicClicked((prev) => !prev)}
          />
          <img
            src="./image-avatar.png"
            alt="image-avatar"
            className="lg:w-[50px] lg:h-[50px] w-[24px] h-[24px] cursor-pointer border hover:border-[#FF7E1B] rounded-[50%]"
            onClick={() => setProfilePicClicked((prev) => !prev)}
          />
        </div>
        {profilePicClicked && <Cart messege="Your cart is empty" />}
      </div>
    </>
  );
}
export default Header;
