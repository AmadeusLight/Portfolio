import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import miImagen2 from 'C:/Users/Ricar/react-portfolio/src/assets/images/par.gif';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <h3>
          Data analyst with a passion for emerging technologies. 
          Looking for an opportunity in the area of technology. 
          </h3>
         
          <h3 align="LEFT">
          I am a person who likes to learn new things, with a great ability 
          to learn new technologies in a self-taught way.
          </h3>
          <h3> 
            I am person who loves to work a lot
          </h3>
        </div>

        <img src={miImagen2} alt="Imagen de contacto" class="imagen-about"/>
        
        
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
