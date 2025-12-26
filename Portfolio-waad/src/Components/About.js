  import React, { useEffect, useState } from 'react';
  import Skills from './Skills.js';
  import Tilt from 'react-parallax-tilt';
  import Lottie from "lottie-react";
  import './About.css';
  import EducationAnimation from '../assets/education.json';
  import { getEducation } from '../services/educationService';

  const About = () => {
    const [educationItems, setEducationItems] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const eduData = await getEducation();
        setEducationItems(eduData);
      }
      fetchData();
    }, []);

    const experiences = [
      {
        role: "Stage Développement Web",
        company: "NAU IIT Sfax",
        year: "2024",
        technologies: ["Spring Boot", "Angular"]
      },
      // ...
    ];

    return (
      <>
        <div className='AboutPage'>
          <div className='AboutContent'>
            <div className='AboutText'>
              <h1 className='AboutTextHeading'>Mon <span className='Highlight'>Parcours</span></h1>

              {/* Section Éducation */}
              <div className='SectionContainer'>
                <div className='SectionHeader'>
                  <div className='SectionIcon'>🎓</div>
                  <h2 className='SectionTitle'>Formation</h2>
                </div>

                <div className='EducationGrid'>
                  {educationItems.map((item) => (
                    <div key={item.id} className='EducationCard'>
                      <div className='EducationTop'>
                        <h3 className='Degree'>{item.degree}</h3>
                        <span className='Year'>{item.year}</span>
                      </div>
                      <p className='University'>{item.university}</p>
                      <p className='Description'>{item.description}</p>
                      <div className='TimelineDot'></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section Expériences */}
              <div className='SectionContainer'>
                <div className='SectionHeader'>
                  <div className='SectionIcon'>💼</div>
                  <h2 className='SectionTitle'>Expériences</h2>
                </div>

                <div className='ExperienceList'>
                  {experiences.map((exp, index) => (
                    <div key={index} className='ExperienceCard'>
                      <div className='ExperienceTop'>
                        <div>
                          <h3 className='Role'>{exp.role}</h3>
                          <p className='Company'>{exp.company}</p>
                        </div>
                        <span className='Year'>{exp.year}</span>
                      </div>
                      <div className='TechStack'>
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className='TechPill'>{tech}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='AnimationSide'>
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <Lottie 
                  className="EducationIllustration" 
                  animationData={EducationAnimation} 
                  loop={true}
                />
              </Tilt>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className='SkillsSection'>
          <div className='SectionHeaderCenter'>
            <div className='SectionIcon'>⚡</div>
            <h2 className='SectionTitleCenter'>Compétences</h2>
          </div>
          <div className='skillsGrid'>
            <Skills skill='React' />
            <Skills skill='Node' />
            <Skills skill='Express' />
            <Skills skill='MongoDb' />
            <Skills skill='Git' />
            <Skills skill='Github' />
            <Skills skill='Javascript' />
            <Skills skill='C++' />
            <Skills skill='Postman' />
            <Skills skill='Figma' />
            <Skills skill='Vercel' />
            <Skills skill='Npm' />
            <Skills skill='Bootstrap' />
            <Skills skill='Spring Boot' />
            <Skills skill='Angular' />
            <Skills skill='Arduino' />
          </div>
        </div>
      </>
    );
  };

  export default About;
