import { createContext,  useState } from "react";
import { JSX } from "react";
interface overlay {
    expanded:boolean,
    setExpanded:React.Dispatch<React.SetStateAction<boolean>>,
    mainImage:string,
    setMainImage:React.Dispatch<React.SetStateAction<string>>,
}
const OverlayContext = createContext<overlay >({
    expanded:false,
    setExpanded:()=>{},
    mainImage:"public/image-product-1.jpg",
    setMainImage:()=>{}
});
export function Provider({children}:{children:JSX.Element}){
    const [expanded,setExpanded] = useState<boolean>(false);
    const [mainImage,setMainImage] = useState<string>("public/image-product-1.jpg");
    return (
        <OverlayContext.Provider value={{expanded,setExpanded,mainImage,setMainImage}}>
            {children}
        </OverlayContext.Provider>
    )
};
export default OverlayContext