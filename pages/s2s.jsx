import Image from 'next/image';
import React from 'react';
// import imgcapImg from '../public/assets/projects/imgcap.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const s2s = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={'/assets/projects/imgcap.png'}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Sign2Sign: A Novel Approach Towards Real-Time ASL to ISL Translation</h2>
          <h3>CNN, NLP, Computer Vision </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <ul>
            <li>Sign language is the main form of communication for people with speech and hearing imparity. There are over 300 types of sign languages across the world, with American Sign Language (ASL) and Indian Sign Language (ISL most popularly used in the United States of America and India, respectively. When a person familiar with ASL has to communicate with a person familiar with ISL, there is bound to be a communication gap and calls for the need of skilled translators. We aim to automate this process by proposing a novel solution that can translate real-time ASL input into ISL. The proposed methodology uses a CNN trained to recognize 36 different classes of ASL signs. The recognized signs are mapped to the respective ISL signs and joined together to form a video. The CNN model for recognizing ASL achieved a testing accuracy of 96.43%.</li>
          </ul>
          <a
            href='https://link.springer.com/chapter/10.1007/978-981-19-4182-5_4'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Paper</button>
          </a>
          <a
            href='https://github.com/sudhanvarajesh/Sign2Sign'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CNN
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> GRU
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> BM25
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NLP
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Computer Vision
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Flask
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default s2s;
