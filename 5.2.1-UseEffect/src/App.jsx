import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RoutesIndex from './routes/RoutesIndex'

function App() {

  return (
    // Debemos utilizar el elemento BrowserRouter para leer lo que está en la URL.
    <BrowserRouter>
      <RoutesIndex />
    </BrowserRouter>
  )
}

export default App
