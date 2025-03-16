import photos from "./Main/photos";
function reducer(state: { photoCount: number,productCount:number }, action: { type: string | undefined }): { photoCount: number,productCount:number } {
  switch (action.type) {
    case "Next":
      return state.photoCount === photos.length - 1 ? { ...state, photoCount: 0 } : { ...state ,photoCount: state.photoCount + 1 }
    case "Prev":
      return state.photoCount === 0 ? { ...state, photoCount: 0 } : { ...state, photoCount: state.photoCount - 1 };
    case "Increase":
      return {...state,productCount:state.productCount+1};
    case "Decrease":
      return state.productCount === 0 ? {...state,productCount:0} : {...state,productCount:state.productCount-1}
    default:
      return state;
  }
}
export default reducer