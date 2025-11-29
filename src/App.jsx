import Navbar from './Componentes/Navbar'
import Home from './Componentes/Home'
import Footer from './Componentes/Footer'
import './App.css'



function App() {
 

  return (
    <div className="app">
      <Navbar />

      <main className='container p-0'  >
        <Home  />
      </main>

      <Footer />
    </div>
  )
}

export default App
