import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import rumeImg from '../public/assets/projects/rume.jpg';
import fittImg from '../public/assets/projects/fitt.webp'
import connect4Img from '../public/assets/projects/connect4.png'
import imgcapImg from '../public/assets/projects/imgcap.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Rume - A Real-Time Chatroom Application  '
            backgroundImg={rumeImg}
            projectUrl='/rume'
            tech='React JS'
          />
          <ProjectItem
            title='fitt - A Real-Time virtual gym trainer and posture corrector'
            backgroundImg={fittImg}
            projectUrl='/fitt'
            tech='React JS'

          />
          <ProjectItem
            title=' Connect4 - 
             A Service Management Platform' 
            backgroundImg={connect4Img}
            projectUrl='/connect4'
            tech='React JS'

          />
          <ProjectItem
            title='Text-Based Image Retrieval Using Captioning'
            backgroundImg={imgcapImg}
            projectUrl='/imgcap'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
