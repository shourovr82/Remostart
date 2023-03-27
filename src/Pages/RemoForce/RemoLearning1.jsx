/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import React from 'react';
import shadowingLearningImg from '../../Assets/UserComponentImages/shadowingLearningImg.png';
import learningPathImg from '../../Assets/UserComponentImages/learningPathImg.svg'
import careerPathImg from '../../Assets/UserComponentImages/reflectCareerImg.png'

const RemoLearning1 = () => {
  return (
    <section className='lg:w-[70%] mt-10 mx-auto'>
      <div>
        <h2 className='text-2xl max-md:text-center lg:text-5xl font-semibold lg:font-bold'>Get Certified!  Get Paid! </h2>
        <p className='text-[#999999] mt-3 font-semibold'>It can be a daunting experience  getting certification for little jobs done, especially yo <br /> individuals and startups, dont worry we do the certification on each shadow job you do and <br /> our startups will pay you for this experience</p>
      </div>
      {/* personalize and anuthing section */}
      <div className='mt-12 text-center flex justify-center '>
        <img src={shadowingLearningImg} alt="" />
      </div>
      {/* learing section 2  */}
      <div>
        <h2 className='text-2xl max-md:text-center lg:text-5xl font-semibold lg:font-bold'>Unlimited Job Options</h2>

      </div>
      {/* categories */}
      <div className='lg:w-4/5 max-md:px-1.5 mt-3 lg:mt-10 mx-auto'>
        <ul className='flex flex-wrap gap-3'>
          <li className='border border-[#61C1FF] px-2 rounded-md py-1'>UX Design</li>
          <li className='border border-[#61C1FF] px-2 rounded-md py-1'>Product Design</li>
          <li className='border border-[#61C1FF] px-2 rounded-md py-1'>JAVA</li>
          <li className='border border-[#61C1FF] px-2 rounded-md py-1'>Web Development</li>
          <li className='border border-[#61C1FF] px-2 rounded-md py-1'>UI</li>
          <li className='border border-[#61C1FF] px-2 rounded-md py-1'>Website Designing</li>
          <li className='border border-[#61C1FF] px-2 rounded-md py-1'>Javascript</li>
          <li className='border border-[#61C1FF] px-2 rounded-md py-1'>Python</li>
        </ul>
      </div>

      {/* personalized learning path */}
      <div className='mt-10'>
        <div>

          <h2 className='lg:text-end text-2xl max-md:text-center lg:text-5xl font-semibold lg:font-bold'>Personalized Career Learning Path</h2>
          <p className='text-[#999999] mt-3 font-semibold'>When we say its personalized, we really mean it, you learn, you get paid while you are learning <br /> and doing the job and all of this gets accumulated into your resuem</p>
        </div>
        <div className='mt-5 hidden lg:block'>
          <img src={learningPathImg} className='object-contain' alt="" />
          <p className='text-center text-[#0B132A] mt-5'>Your path to success</p>
        </div>

      </div>

      {/* reflect career section */}
      <div className='mt-14'>
        <div>
          <h2 className='text-2xl lg:text-end max-md:text-center lg:text-5xl font-semibold lg:font-bold'>Reflect Your Career Through Us</h2>
          <p className='text-[#999999] mt-3 lg:ml-20 font-semibold'>See your career path progressing, from a job shadow to full job employment offer this is what we are all about</p>
        </div>
        <div className='mt-8 hidden lg:block '>
          <img className='object-contain  lg:w-4/5  mx-auto' src={careerPathImg} alt="" />
        </div>
      </div>
    </section>


  );
};

export default RemoLearning1;