import React from 'react'
import './Project.css'
import MedicalImage from './Medical.png';
import Fithub from './fithub.png'
import Netflix from './net.png'
function Project() {
  const cardData = [
    {
      title: "TRAINBITE",
      description: "It is food delivery website that delivers food at stations using PNR No",
      imageUrl: MedicalImage,
      githubUrl: " https://github.com/dhyanishubham122/Trainbite_hub.git"
    },
    {
      title: "FITHUB",
      description: "It is fittnes app in which all body excercise are present according to user body weight",
      imageUrl: Fithub,
      githubUrl: " https://github.com/dhyanishubham122/FitHub.git"
    },
    {
      title: "NETFLIX-Clone",
      description: "It a netflix clone website that shows top-rated movie, new release, Popular movies",
      imageUrl: Netflix,
      githubUrl: " https://github.com/dhyanishubham122/Netflix-clone.git"
    }
  ]
  
  return (
    <div className='project-main'>
    <div className='project'>
      <h1 className='pro'>PROJECTS</h1>
      <div className="card-container">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imageUrl} alt={card.title} className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
            <a href={card.githubUrl} target="_blank" rel="noopener noreferrer" className="card-link">
               view on github</a>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  )
};

export default Project