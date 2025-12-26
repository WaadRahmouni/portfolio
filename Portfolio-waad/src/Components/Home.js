import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import { CiCoffeeCup } from "react-icons/ci";
import ProfileImage from './profile.png'
const Home = () => {
  return (
    <div>
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Salut !</h1>
          <h1>Je suis <b>Rahmouni Waad</b></h1>
          <Typed />
        </div>
        
        
          <Tilt>
          <img 
            className='illustration' 
            src={ProfileImage} 
            alt="Photo de profil de Rahmouni Waad" 
          />
        </Tilt>
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'><b>Présentation</b></h1>
          <p>
            Développeuse passionnée par la création d'applications modernes et intuitives,
            j'accorde une grande importance à la qualité du code et à l'expérience utilisateur. Ma
            curiosité et mon sens du détail me poussent à explorer en permanence de nouvelles
            technologies et à relever de nouveaux défis.
            <br /><br />
            Je souhaite effectuer un stage PFE me permettant de mettre en œuvre mes
            compétences en développement mobile et de participer activement à des projets
            innovants.
            <br /><br />
            Je maîtrise <b>JavaScript/TypeScript</b> avec <b>React Native</b> et <b>React.js</b>,
            et j'ai également de l'expérience avec le <b>MERN</b> stack. Je continue à approfondir
            mes connaissances en <b>Node.js</b>, <b>Next.js</b> et autres technologies modernes.
            <br /><br />
            Et bien sûr, j'adore le <b>café</b> <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
      
      </div>
    </div>
  )
}

export default Home