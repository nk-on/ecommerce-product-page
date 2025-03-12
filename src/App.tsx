
import './App.css'
import Header from './Header'
import MainPage from './MainPage'
import { Provider } from './Context'
function App() {

  return (
    <>
     <div className='flex justify-center'>
       <Header />
     </div>
     <Provider><MainPage /></Provider>
    </>
  )
}

export default App
