function ProductData() {
  return (
    <>
      <div className="mt-[50px] w-[426px] text-[#000] flex flex-col gap-[20px] ">
        <p className="text-[#FF7E1B]">Sneaker Company</p>
        <h1 className="font-bold text-[44px]">Fall Limited Edition Sneakers</h1>
        <p className="text-[#69707D]">
          These low-profile sneakers are your perfect casual wear companion. Featuring a
          durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className="flex gap-[20px] w-[173px]">
          <div>
            <h1 className="font-bold text-[28px]">125.00$</h1>
            <p className="line-through text-[#B6BCC8]">$250.00</p>
          </div>
          <div className="bg-[#FFEEE2] w-[51px] h-[27px] rounded-[6px] text-[#FF7E1B] flex justify-center items-center">50%</div>
        </div>
        <div className="flex gap-[5px]">
            <div className="w-[157px] h-[56px] bg-[#F6F8FD] rounded-[10px] flex justify-around items-center">
                <img src="public/icon-minus.svg" alt="minus" className="w-[12px] h-[3.33px]"></img>
                <div>0</div>
                <img src="public/icon-plus.svg" alt="+"  className="w-[12px] h-[13.71px]"/>
            </div>
            <button className="w-[272px] h-[56px] bg-[#FF7E1B] rounded-[10px] flex justify-around items-center"><img src="public/Cart.svg"></img>Add to cart</button>
        </div>
      </div>
    </>
  );
}
export default ProductData;
