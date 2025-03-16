import { createContext,  useState } from "react";
import { JSX } from "react";
import reducer from "./reducer";
import { useReducer } from "react";
interface State {
    photoCount: number,
    productCount:number
}

interface overlay {
    expanded:boolean,
    setExpanded:React.Dispatch<React.SetStateAction<boolean>>,
    mainImage:string,
    setMainImage:React.Dispatch<React.SetStateAction<string>>,
    state:State,
    dispatch: React.Dispatch<{ type: string }>; 
}
const OverlayContext = createContext<overlay >({
    expanded:false,
    setExpanded:()=>{},
    mainImage:"public/image-product-1.jpg",
    setMainImage:()=>{},
    state:{ photoCount:0,productCount:0},
    dispatch:()=>{}
});
export function Provider({children}:{children:JSX.Element}){
    const [expanded,setExpanded] = useState<boolean>(false);
    const [mainImage,setMainImage] = useState<string>("public/image-product-1.jpg");
    const [state, dispatch] = useReducer(reducer, { photoCount: 0, productCount: 0});
    return (
        <OverlayContext.Provider value={{expanded,setExpanded,mainImage,setMainImage,state,dispatch}}>
            {children}
        </OverlayContext.Provider>
    )
};
export default OverlayContext