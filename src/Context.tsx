import { createContext,  useState } from "react";
import { JSX } from "react";
interface overlay {
    expanded:boolean,
    setExpanded:React.Dispatch<React.SetStateAction<boolean>>
}
const OverlayContext = createContext<overlay >({
    expanded:false,
    setExpanded:()=>{},
});
export function Provider({children}:{children:JSX.Element}){
    const [expanded,setExpanded] = useState<boolean>(false);
    return (
        <OverlayContext.Provider value={{expanded,setExpanded}}>
            {children}
        </OverlayContext.Provider>
    )
};
export default OverlayContext