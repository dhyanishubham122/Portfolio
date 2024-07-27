import React from 'react';
import './Skills.css';
import atom from "./atom.png"
import java from "./java.png"
import cplus from "./c-.png"
import java_s from "./java-script.png"
import html from "./html-5.png"
import c from "./letter-c.png"
import node from "./nodejs.png"
import database from"./database.png"
import php from "./php.png"
import css from "./css-3.png"
const images=[
  { src:html, alt:'html'},
  { src:css, alt:'css'},
  { src:java_s, alt:'java_s'},
  { src:atom, alt:'reactjs'},
  { src:node, alt:'nodejs'},
  { src:php, alt:'php'},
  { src:database, alt:'SQL'},
  { src:c, alt:'c'},
  { src:cplus, alt:'cplus'},
  { src:java, alt:'java'},
 
];
function Skills() {

  return (
    <div className='skills'>
    {images.map((image, index) => (
      <img
        style={{ width: '13%', height: '120px', paddingTop: '12%', marginLeft: '4%',  animationDelay: `${index * 0.5}s`  }}
        key={index}
        src={image.src}
        alt={image.alt}
      />
    ))}
  </div>
  )
}

export default Skills;