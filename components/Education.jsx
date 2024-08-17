import React from 'react';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Education = () => {
  const educationList = [
    {
      degree: 'Master\'s Degree in Computer Science',
      institution: 'Texas A&M University | Bangalore, India',
      duration: 'Aug 2023 – May 2025',
      details: [
        'GPA: 3.83',
        'Relevant coursework: Analysis of Algorithms, Software Engineering, Machine Learning, Operating Systems, Network Security, Large Language Models, Intelligent User Interfaces, Parallel Computing',
      ],
    },
    {
      degree: 'Bachelor\'s Degree in Computer Science',
      institution: 'PES University | Bangalore, India',
      duration: 'Aug 2019 – May 2023',
      details: [
        'GPA: 9.11',
        'Relevant coursework: Design and Analysis of Algorithms, Data Structures and their applications, Cloud Computing, Operating Systems, Database Management Systems, Object Oriented programming, Machine Learning, Software Engineering, Digital Design & Computer Organization, Statistics and Data Science, Software Testing, Microprocessor and Computer Architecture, Internet of Things',
      ],
    },
  ];

  return (
    <div id='education' className='w-full lg:h-screen'>
      <br />
        <br />
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Education
        </p>
        <h2 className='py-4'>My Academic Background</h2>
        <div className='grid gap-8'>
          {educationList.map((edu, index) => (
            <div key={index} className='w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='p-4'>
                <h2 className='py-2'>{edu.degree}</h2>
                <p className='italic'>{edu.institution}</p>
                <p className='py-2'>{edu.duration}</p>
                <ul className='list-disc list-inside'>
                  {edu.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
