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
        <MainPage />
      </>
    </Provider>
  );
}

export default App;
