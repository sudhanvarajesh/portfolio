import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'JPMorgan Chase and Co | Bangalore, India ',
      duration: 'Feb 2023 – May 2023',
      description: [
        "Architected a streamlined data migration tool, orchestrating the seamless transfer of on-premises data to the AWS cloud, focusing on meticulous data ingestion and enrichment.",
        "Designed an efficient Apache NiFi-based flow for automated post-enrichment data transfer from ElasticSearch to AWS S3 buckets, reducing transfer time by 35%.",
        "Implemented an optimized approach for bulk data transfer to S3, integrating AWS OpenSearch instances through triggered lambda functions, resulting in a 60% increase in transfer speed.",
      ],
    },
    {
      title: 'Youth Board Member',
      company: 'Reap Benefit | Bangalore, India ',
      duration: 'Aug 2021 – Jan 2022',
      description: [
        "Engineered a pothole detection system using YOLO v5, achieving a 30% accuracy improvement and enabling swift user complaints through a chatbot to the municipal ward.",
        "Mentored a diverse college student group in the Solutions Community, driving a 70% increase in project completions while orchestrating workshops to enhance knowledge sharing and overall team collaboration.",
      ],
    },
    {
      title: ' Research Intern',
      company: 'Siemens Technology | Bangalore, India ',
      duration: 'June 2021 – July 2021',
      description: [
        "Optimized the development of an impactful NLP pipeline, featuring a high-precision Semantic Role Labeling system and a robust Named Entity Recognition system, yielding invaluable insights from industry reports, with a 20% increase in accuracy.",
        "Elevated analytical capabilities by meticulously refining the knowledge graph creation process, by incorporating triplet extraction from the identified named entities and their semantic roles, empowering data-driven decision-making.",
        "Implemented a search system by leveraging sentence transformers and Elasticsearch indexing, achieving seamless retrieval of semantically matched reports with an impressive average response time of under 500 milliseconds.",
      ],
    },
  ];

  return (
    <div id='experience' className='w-full lg:h-screen p-2 mb-80'>
      <br />
      <br />
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Experience
        </p>
        <h2 className='py-4'>My Professional Journey</h2>
        <div className='grid gap-8'>
          {experiences.map((exp, index) => (
            <div key={index} className='w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='p-4'>
                <h2 className='py-2'>{exp.title}</h2>
                <p className='italic'>{exp.company}</p>
                <p className='py-2'>{exp.duration}</p>
                <ul className='list-disc list-inside'>
                  {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
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

export default Experience;
