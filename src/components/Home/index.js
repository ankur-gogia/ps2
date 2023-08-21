import { useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['n', 'k', 'u', 'r']
  const jobArray = [
    'A',
    ' ',
    'p',
    'h',
    'o',
    't',
    'o',
    'g',
    'r',
    'a',
    'p',
    'h',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page" >
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img className='logoimage'
              src={LogoTitle}
              alt="Ankur Gogia"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2>Programmer / Photographer / Traveller</h2>
          <Link style={{
    textDecoration: 'none',
    color: 'rgb(19 82 116)',
    fontWeight: '340',
    fontSize: '15px',
    fontFamily: 'inherit',
    letterSpacing:'3px'
  }}to="/contact" className="button-52">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
    
  )
}

export default Home
