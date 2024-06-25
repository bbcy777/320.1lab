import { useState } from 'react'
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Footer from './components/Footer';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import img1 from './assets/320.1.2-1.jpg';
import img2 from './assets/320.1.2-2.jpg';
import './App.css';

let blogs = [
  {
    date: "11/12/20",
    title: "On the Street in Brooklyn",
    image: img1,
    alt: "woman in red dress on a sidewalk in Brooklyn",
    blogContent: "Cray ipsum dolor, sit amet consectetur adipisicing elit. Nihil maiores, ex sapiente nemo voluptas consequuntur necessitatibus voluptatem facere fuga saepe optio quaerat est ea, non, tempore dolor iste. Laborum eius aspernatur enim excepturi impedit, provident, repellat sed officia soluta itaque reprehenderit debitis iste aliquam rerum mollitia quisquam, dolorum natus nostrum pariatur facilis numquam incidunt harum. Ex officiis optio, sed, aut quae quas assumenda repellendus quisquam nam non ullam cum tenetur facilis aliquid ea reiciendis. Doloribus animi corporis magnam? Quo nihil sed illo hic nemo, dolores, distinctio quae soluta consequatur nam animi voluptatum ad veniam quam est ex architecto? At, suscipit? "
  },
  {
    date: "11/11/20",
    title: "Vintage in Vogue",
    image: img2,
    alt: "couple women and a guy in vintage outfits",
    blogContent: "Cray ipsum dolor, sit amet consectetur adipisicing elit. Nihil maiores, ex sapiente nemo voluptas consequuntur necessitatibus voluptatem facere fuga saepe optio quaerat est ea, non, tempore dolor iste. Laborum eius aspernatur enim excepturi impedit, provident, repellat sed officia soluta itaque reprehenderit debitis iste aliquam rerum mollitia quisquam, dolorum natus nostrum pariatur facilis numquam incidunt harum. Ex officiis optio, sed, aut quae quas assumenda repellendus quisquam nam non ullam cum tenetur facilis aliquid ea reiciendis. Doloribus animi corporis magnam? Quo nihil sed illo hic nemo, dolores, distinctio quae soluta consequatur nam animi voluptatum ad veniam quam est ex architecto? At, suscipit? "
  }
]

function App() {


  return (
    <>
      <h1>Sartre's List</h1>
      <h3>Better-Dressed People</h3>

      {/* ----------------navbar */}
      <Navbar />
      <Blog content={blogs[0]}/>
      <Blog content={blogs[1]}/>
      <Footer />
      
    </>
  )
}

export default App
