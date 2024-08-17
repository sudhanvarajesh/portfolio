import Image from 'next/image';
import React from 'react';
// import imgcapImg from '../public/assets/projects/imgcap.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const ct = () => {
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
          <h2 className='py-2'>A Comparative Analysis of Chest X-Rays and CT Scans Towards COVID-19 Detection</h2>
          <h3>CNN, NLP, Computer Vision </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <ul>
            <li>The diagnosis of COVID-19 is greatly aided by radiological chest examinations. In this study, we conduct a comprehensive comparison of various classification models to classify COVID-19 from Chest X-ray images and devise an automated, precise model to segment the COVID-19 infected regions present in Chest CT Scans and make the results interpretable with the use of GradCAM. A total of 4000 images from the COVID-19 Radiography dataset were used for training and evaluating the models. In order to predict COVID-19 in Chest X-rays, the transfuse segmentation model [1] is used to segment the lungs. Radiomic features are then extracted and the most essential features were selected using Principle Component Analysis which were then used to train six classification models, namely support vector machines (SVM), Logistic Regression (LR), Decision Trees, AdaBoost (AB), K-Nearest Neighbors (KNN) and Random Forest. Support vector machines was the best-performing classifier with an accuracy of 0.9115 and an AUC of 0.9117. In the case of CT scans, lungs were segmented using image processing techniques, and a total of 2482 CT Scans from the SARS-COV-2 CT-Scan Dataset were used to train a ResNet18 CNN architecture, whose results were made interpretable by employing gradCAM. Furthermore, infections were segmented from the CT scans using two image processing based approaches, the first making use of the Discrete Wavelet Transform and the second approach performing morphological operations. The ResNet18 CNN used for assisting GradCAM achieved a testing accuracy of 96.34%. In order to evaluate the results, the infections were compared with 25 manually segmented CT scans and achieved a precision of 0.975, a recall of 0.960, and an IOU score of 0.937.</li>
          </ul>
          <a
            href='https://ieeexplore.ieee.org/document/10170302'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Paper</button>
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

export default ct;
