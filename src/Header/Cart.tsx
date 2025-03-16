import { useContext } from "react";
import OverlayContext from "../Context";

function Cart({ messege }: { messege: string }) {
  const { state } = useContext(OverlayContext);
  console.log(state);
  return (
    <div className=" bg-[#fff] shadow-deep absolute lg:left-[72%] lg:top-[17%] right-[1%] top-[18%] lg:w-[360px] w-[100%] h-[256px] rounded-[10px]">
      <div className="border-[#E4E9F2] border-b h-[20%] flex items-center p-[20px] font-bold">
        <h1>Cart</h1>
      </div>
      <div className="flex justify-center items-center h-[80%]">
        {state.productCount > 0 ? (
          <div>
            <div className="flex flex-col gap-[30px]">
              <div className="flex gap-[15px]">
                <img
                  src="public/image-product-1-thumbnail.jpg"
                  className="w-[50px] h-[50px]"
                />
                <div>
                  <p>Fall Limited Edition Sneakers</p>
                  <div >
                    $125.00 x {state.productCount} <span className="font-bold">${state.productCount * 125}</span>
                  </div>
                </div>
                <img src="public/Trashbin.svg"  />
              </div>
              <button className="w-[90%] bg-[#FF7E1B] h-[56px] rounded-[10px] text-[#fff]">Checkout</button>
            </div>
          </div>
        ) : (
          messege
        )}
      </div>
    </div>
  );
}
export default Cart;
