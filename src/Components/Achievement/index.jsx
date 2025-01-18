import React, { useState,useRef,useEffect } from 'react'
import "./Achievement.css"
import { FaUsersLine,FaDiagramProject } from 'react-icons/fa6'
import { FaAward } from 'react-icons/fa'

import Odometer from 'react-odometerjs'
import { GiTeamIdea } from 'react-icons/gi'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Achievement = () => {
  const [clients,setClients]=useState(0)
  const [projects,setProjects]=useState(0)
  const [teams,setTeams]=useState(0)
  const [awards,setAwards]=useState(0)
  const container=useRef(null);
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
        onEnter: () => {
          setClients(120);
          setProjects(150);
          setTeams(44);
          setAwards(89);
        },
        onLeaveBack: () => {
          setClients(0);
          setProjects(0);
          setTeams(0);
          setAwards(0);
        },
      },
    });

    return () => {
      timeline.scrollTrigger?.kill(); // Clean up GSAP on unmount
    };
  }, []);
  return (
    <div className='achievement__container' ref={container}>
        <div className="container">
          {/* Start Achievement */}
          <div className="achievement">
            <div className="icon__container">
              <FaUsersLine />
            </div>
            <div className="details">
              <div className="row">
                <Odometer 
                  value={clients}
                  className='title'
                />
                <h1 className="title">K</h1>
              </div>
              <small className='text__muted'>Happy Cutomer</small>
            </div>
          </div>
          {/* End Achievement */}

             {/* Start Achievement */}
             <div className="achievement">
            <div className="icon__container">
              <FaDiagramProject />
            </div>
            <div className="details">
              <div className="row">
                <Odometer 
                  value={projects}
                  className='title'
                />
                <h1 className="title">+</h1>
              </div>
              <small className='text__muted'>Completed Projects</small>
            </div>
          </div>
          {/* End Achievement */}

               {/* Start Achievement */}
               <div className="achievement">
            <div className="icon__container">
              <GiTeamIdea />
            </div>
            <div className="details">
              <div className="row">
                <Odometer 
                  value={teams}
                  className='title'
                />
                <h1 className="title">+</h1>
              </div>
              <small className='text__muted'>Expert Workers</small>
            </div>
          </div>
          {/* End Achievement */}

          
               {/* Start Achievement */}
               <div className="achievement">
            <div className="icon__container">
              <FaAward />
            </div>
            <div className="details">
              <div className="row">
                <Odometer 
                  value={awards}
                  className='title'
                />
                <h1 className="title">+</h1>
              </div>
              <small className='text__muted'>Awards Winning</small>
            </div>
          </div>
          {/* End Achievement */}
        </div>
    </div>
  )
}

export default Achievement