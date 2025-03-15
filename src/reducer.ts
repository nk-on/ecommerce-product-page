import photos from "./Main/photos";
function reducer(state: { count: number }, action: { type: string | undefined }): { count: number } {
  switch (action.type) {
    case "Next":
      return state.count >= photos.length ? state : { count: state.count + 1 }
    case "Prev":
      return state.count < 0 ? state : { count: state.count - 1 };
    default:
      return state;
  }
}
export default reducer