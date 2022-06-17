import React from 'react'
import ProjectCard from '../components/ProjectCard'
import bird from '../assets/images/bird.JPG'

function Projects() {
  return (
    <div className='flex flex-col items-center mb-24'>
      <p className='text-5xl mt-20 text-theme font-bold'>My Projects!</p>
      <p className='mt-2'>Here are my finished and work in progress projects.</p>
      <div class="grid gap-8 grid-cols-1 grid-rows-2 mt-12 w-9/12 md:grid-cols-2">

      <ProjectCard name={"Quickcation"} projectLink={""} imageLocation={bird} technologies={"ReactJS / Firebase / Docker / MongoDB / Express"} desc={"Web application which shows you different destinations and plans out an affordable trip (based on your budget) between them for you."}></ProjectCard>
      <ProjectCard name={"Resume Review"} projectLink={""} imageLocation={bird} technologies={"ReactJS / Firebase / Docker / MongoDB / Express"} desc={"Web application used by professionals and students to share their resumes and review the resumes of their fellow users."}></ProjectCard>
      <ProjectCard name={"CarKart"} projectLink={""} imageLocation={bird} technologies={"ReactJS / Firebase / Docker / MongoDB / Express"} desc={"Grocery carpooling app where users can complete orders for others, receive points and have those favours repaid by other users."}></ProjectCard>
      <ProjectCard name={"FinGine"} projectLink={""} imageLocation={bird} technologies={"ReactJS / Firebase / Docker / MongoDB / Express"} desc={"A financial simulation engine used to help users make predicts in regards to different financial situations."}></ProjectCard>
      {/*<ProjectCard name={"Signal Remake"} imageLocation={bird} desc={"Remake of the heavily lauded app: Signal."}></ProjectCard>
      <ProjectCard name={"Creative coding experiments"} imageLocation={bird} desc={"A collection of my creative coding experiments and thoughts."}></ProjectCard>
      */}
      </div>
    </div>
  )
}

export default Projects