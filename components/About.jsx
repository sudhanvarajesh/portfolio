import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import AboutImg from '../public/assets/about-pic.jpeg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          
          <h2 className='py-4'>About me</h2>
          <p className='py-2 text-gray-600'>
            I am a highly motivated and dedicated computer science professional pursuing a Master of Science degree in Computer Science from Texas A&M University. With a strong foundation in computer science and engineering, I possess diverse technical skills and expertise in areas such as Python, Java, C++, Django, Flask, TensorFlow, AWS, and more.
          </p>
          <p className='py-2 text-gray-600'>
          Driven by a passion for innovation and problem-solving, I have actively participated in various projects and research endeavors. I take pride in my ability to analyze complex problems, devise effective solutions, and collaborate with diverse teams. With a solid commitment to continuous learning, I am always eager to explore new technologies and stay updated with the latest advancements in the field.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={'/assets/about-pic.jpeg'} className='rounded-xl' alt='/' width={300} height={300}/>
        </div>
      </div>
    </div>
  );
};

export default About;
