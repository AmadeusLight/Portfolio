import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import miImagen2 from 'C:/Users/Ricar/react-portfolio/src/assets/images/par.gif';
import miimagen33 from 'C:/Users/Ricar/react-portfolio/src/assets/images/miku.png';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
     
      <div className="container about-page">
        <div className="botContainer"> 
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c','t','s',]}
              idx={15}
            />
          </h1>
          
        </div>
        <div>
        <a href="https://docs.google.com/spreadsheets/d/1qqh9dOSyWlTsO-6a_tNWTZRuXo4zz6cTx4Dk3acZQpA/edit?usp=sharing" target="_blank">
             <img src={miimagen33}alt="Imagen de " class="imagen-portfolio1"/> 
             
             </a>
             <a href="https://docs.google.com/spreadsheets/d/1qqh9dOSyWlTsO-6a_tNWTZRuXo4zz6cTx4Dk3acZQpA/edit?usp=sharing" target="_blank">
             <img src={miimagen33}alt="Imagen de " class="imagen-portfolio2"/> 
             
             </a>
             <a href="https://docs.google.com/spreadsheets/d/1qqh9dOSyWlTsO-6a_tNWTZRuXo4zz6cTx4Dk3acZQpA/edit?usp=sharing" target="_blank">
             <img src={miimagen33}alt="Imagen de " class="imagen-portfolio3"/> 
             
             </a>
             <a href="https://docs.google.com/spreadsheets/d/1qqh9dOSyWlTsO-6a_tNWTZRuXo4zz6cTx4Dk3acZQpA/edit?usp=sharing" target="_blank">
             <img src={miimagen33}alt="Imagen de " class="imagen-portfolio4"/> 
             
             </a>
        <img src={miImagen2} alt="Imagen de contacto" class="imagen-portfolio5"/>
        </div>
        
      </div>
     
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
