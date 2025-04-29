import "./App.css";
import Header from "./Header";
import MainPage from "./MainPage";
import { Provider } from "./Context";
function App() {
  return (
    <Provider>
      <>
        <div className="flex justify-center">
          <Header></Header>
        </div>
        <div className="w-[100%] h-[100%] flex  justify-center items-center">
          <MainPage />
        </div>
      </>
    </Provider>
  );
}

export default App;
