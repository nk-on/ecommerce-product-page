function Cart({ messege }: { messege: string }) {
  return (
    <div className=" bg-[#fff] shadow-deep absolute lg:left-[72%] lg:top-[17%] right-[1%] top-[18%] lg:w-[360px] w-[100%] h-[256px] rounded-[10px]">
      <div className="border-[#E4E9F2] border-b h-[20%] flex items-center p-[20px] font-bold">
        <h1>Cart</h1>
      </div>
      <div className="flex justify-center items-center h-[80%]">{messege}</div>
    </div>
  );
}
export default Cart;
