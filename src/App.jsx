// import './App.css';
// import Header from "./Components/Header";
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Skills from './Components/Skills';
// import About from './Components/About';
// import Contact from "./Components/Contact"
// import Home from './Components/Home';

// function App() {
//   return (
    
//    <BrowserRouter>
//    <div >
//    <Header/>
//     <Routes>
//       <Route>
//         <Route path="/" element={Home}/>
//         <Route path="/about" element={About}/>
//         <Route path="/skills" element={Skills}/>
//         <Route path="/contact" element={Contact}/>

//       </Route>
//     </Routes>
//     </div>
//    </BrowserRouter>
    
//   );
// }
// export default App;
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Home from './Components/Home';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Project from './Components/Project';
function App() {
  
  return (
    <div>
    
      <BrowserRouter>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          <Route path='/Project' element={<Project/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
