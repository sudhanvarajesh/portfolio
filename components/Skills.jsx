import Image from 'next/image';
import React from 'react';
import algo from '../public/assets/skills/algo.jpeg';
import ml from '../public/assets/skills/ml.png';
import mongo from '../public/assets/skills/mongo.png';
import languages from '../public/assets/skills/languages.png';
import webdev from '../public/assets/skills/react.png';
import AWS from '../public/assets/skills/aws.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <h3>Languages</h3> <br />
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              
              <div className='m-auto'>
                <Image src={languages} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <ul>
                  <li><h3>Java</h3></li>
                  <li><h3>Python</h3> </li>
                  <li><h3>C/C++</h3> </li>
                  <li><h3>SQL</h3> </li>
                  <li><h3>JavaScript</h3> </li>
                  <li><h3>TypeScript</h3> </li>
                  <li><h3>HTML/CSS</h3> </li>
                  <li><h3>Ruby</h3> </li>
                  <li><h3>TensorFlow</h3></li>
                  <li><h3>PyTorch</h3></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <h3>Web Development</h3> <br />
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              
              <div className='m-auto'>
                <Image src={webdev} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <ul>
                  <li><h3>Spring Boot</h3></li>
                  <li><h3>Node.js</h3></li>
                  <li><h3>REST</h3></li>
                  <li><h3>SOAP</h3></li>
                  <li><h3>MVC</h3></li>
                  <li><h3>Django</h3></li>
                  <li><h3>Flask</h3></li>
                  <li><h3>Ruby on Rails</h3></li>
                  <li><h3>MERN</h3></li>
                </ul>
              </div>
            </div>
          </div>


          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <h3>Infrastructure</h3> <br />
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              
              <div className='m-auto'>
                <Image src={AWS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <ul>
                  <li><h3>AWS</h3></li>
                  <li><h3>Terraform</h3></li>
                  <li><h3>Docker</h3></li>
                  <li><h3>Kubernetes</h3></li>
                  <li><h3>Azure</h3></li>
                  <li><h3>Elasticsearch</h3></li>
                </ul>

              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <h3>Machine Learning</h3> <br />
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
          
              <div className='m-auto'>
                <Image src={ml} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <ul>
                  <li><h3>NLP</h3></li>
                  <li><h3>LLMs</h3></li>
                  <li><h3>Computer Vision</h3></li>
                  <li><h3>Reccomendation Systems</h3></li>
                  <li><h3>Search Systems</h3></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <h3>Databases & Search/Analytics</h3> <br />
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={mongo} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <ul>
                  <li><h3>MySQL</h3></li>
                  <li><h3>MongoDB</h3></li>
                  <li><h3>PostgreSQL</h3></li>
                  <li><h3>Redis</h3></li>
                  <li><h3>DynamoDB</h3></li>
                  <li><h3>Cassandra</h3></li>
                  <li><h3>Hive</h3></li>
                  <li><h3>NoSQL</h3></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <h3>Algorithms & Design</h3> <br />
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={algo} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <ul>
                  <li><h3>Design Patterns</h3></li>
                  <li><h3>Microservices</h3></li>
                  <li><h3>RPCs</h3></li>
                  <li><h3>SOLID</h3></li>
                  <li><h3>SDLC</h3></li>
                  <li><h3>OOAD</h3></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;


