function Header() {
  const menuItems = ['Collections','Men','Women',"About","Contact"]
  return (
    <>
      <div className="flex items-center lg:w-[90%] w-full h-[50px] pb-[5px] border border-red-600">
         <nav className="flex w-[60%] gap-[30px] px-[10px]">
            <img src="public/icon-menu.svg" alt="menu-icon" className="lg:hidden block" />
            <img src="public/logo.svg" alt="sneakers" />
            <ul className="lg:flex justify-between w-[50%] hidden">
              {
                menuItems.map((item)=> <li className="text-[#69707D] text-[15px] cursor-pointer">{item}</li>)
              }
            </ul>
         </nav>
      </div>
    </>
  )
}
export default Header;
