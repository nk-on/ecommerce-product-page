function Header() {
  const menuItems = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <>
      <div className="flex items-center lg:w-[90%] w-full h-[50px] mt-[70px] pb-[30px] border-[#E4E9F2] border-b">
        <nav className="flex w-[60%] gap-[30px] px-[10px]">
          <img src="public/icon-menu.svg" alt="menu-icon" className="lg:hidden block" />
          <img src="public/logo.svg" alt="sneakers" className="w-[137.5px] h-[20px]" />
          <ul className="lg:flex justify-between w-[60%] hidden">
            {menuItems.map((item) => (
              <li className="text-[#69707D] text-[15px] cursor-pointer border-[#FF7E1B]  hover:border-b-[4px]">
                 <div className="pb-[50px]">{item}</div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Header;
