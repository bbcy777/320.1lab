import { useState } from 'react'
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Footer from './components/Footer';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';

let blogs = [
  {

  }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Sartre's List</h1>
      <h3>Better-Dressed People</h3>

      {/* ----------------navbar */}
      <Navbar />
      <Blog />
      <Footer />
      
    </>
  )
}

export default App
