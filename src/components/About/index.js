import {useState} from 'react'
import {
  faAmazon,
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

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
      <div className="container about-page" >
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Hey there, I'm Ankur, your friendly explorer with a camera in 
          one hand and a passport in the other. While my friends are busy debugging, 
          I'm on a quest for the world's most captivating snapshots.
          </p>
          <p align="LEFT">
          Think of me as the Sherlock of scenic spots, the Indiana Jones of intriguing 
          alleyways, and the Gandalf of great angles. Join me on this visual rollercoaster as 
          I turn fleeting moments into timeless memories.
          </p>
          <p>
          If life is a canvas, consider me the mischievous artist armed with a camera 
          – capturing joy, one click at a time. So buckle up, pixel pals, and let's embark 
          on a whimsical journey that's all about seizing the splendid, skipping the code, 
          and embracing the extraordinary.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAmazon} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div> 
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
