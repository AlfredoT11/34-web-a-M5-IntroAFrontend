import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex'
import NavBarComponent from './components/NavBarComponent'



function App() {

  return (
    // Debemos utilizar el elemento BrowserRouter para leer lo que está en la URL.
    <BrowserRouter>
      <NavBarComponent />
      <RoutesIndex />
    </BrowserRouter>
  )
}

export default App
