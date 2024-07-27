// import React from 'react'
// import shubhamhack from "./shubhamhack.png";
// import './Home.css'
// function Home() {
//   return (
//     <div className='home'>
//       <div className='content'>
//          <h1>SHUBHAM</h1>
//          <h3>FULLSTACK DEVELOPER</h3>
//       </div>
//       <div className='image'>
//         <img src={shubhamhack} alt="profile image"/>
//       </div>
//       <div>

//       </div>
//     </div>
//   )
// }

// export default Home
import shubhamhack from './shubhamhack.png';
import './Home.css';

import { useNavigate } from 'react-router-dom';
function Home() {
 const navigation=useNavigate();
const handleclick=()=>{
  navigation('/Project')

  }
  return (
    <div className="home">
      <div className="content">
        <h1>SHUBHAM</h1>
        <h3>FULLSTACK DEVELOPER</h3>
      </div>
      <button className='recent' onClick={handleclick}>RECENT PROJECTS</button>
     
      <div className="image">
        <img src={shubhamhack} alt="profile" />
      </div>
      
    </div>
  );
}

export default Home;
