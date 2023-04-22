import React from 'react';
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import faqImage from '../../Assets/Images/RemoForceHome/Faq.png';

const ShadowingFaqs = () => {
  const shadowingFaqs = [
    {
      faqTitle: 'How does Your Verification System work?',
      faqContent: 'We use different methods to pay our talents, we understand how payment is fictionalized in different geographies. So we use a combination of crypto, world remit, paypal, moneygram to pay our talents'
    },
    {
      faqTitle: 'What is the Job Shadowing all about?',
      faqContent: 'Job shadowing provides you with the opportunity to experience the essence of working in a particular field based on your skill set.'
    },
    {
      faqTitle: 'What Payment methods do you use?',
      faqContent: 'We use different methods to pay our talents, we understand how payment is fictionalized in different geographies. So we use a combination of crypto, world remit, paypal, moneygram to pay our talents'
    },
    {
      faqTitle: 'Does Remostart offer non-technical jobs?',
      faqContent: 'Yes, Remostart offers a large pool of non-technical jobs that you can explore based on your skills and interests.'
    },
    {
      faqTitle: 'What Kind of projects can I work on?',
      faqContent: 'At our platform, we strive to provide a diverse range of project opportunities that align with your skills and expertise. We understand that everyone has different strengths and interests, so we aim to cater to a variety of job types and industries.'
    },
  ]
  return (
    <section className="space-y-4 mt-14  lg:w-4/5   mx-auto ">
      <div className="mb-12 max-md:ml-8 relative ">
        {/* Section Title */}
        <h1 className="text-2xl lg:text-4xl text-start relative z-10  font-bold">
          Frequently Asked Questions
        </h1>
        <img
          className="absolute lg:-top-7 -top-6 -left-9 lg:-left-10 w-24 lg:w-24"
          src={faqImage}
          alt=""
        />
        <p className="text-sm ml-16 lg:ml-10 text-[#999999]">
          If you have any further questions please contact us.
        </p>
      </div>
      {shadowingFaqs &&
        shadowingFaqs.map((remoFaq, index) => (
          <div
            key={Math.random()}
            tabIndex={index}
            className="collapse  collapse-arrow border border-base-300 bg-base-100 rounded-[10px]"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-base font-semibold">
              {remoFaq?.faqTitle}
            </div>
            <div className="collapse-content text-sm text-[#999999]">
              <p>{remoFaq?.faqContent}</p>
            </div>
          </div>
        ))}
    </section>
  );
};

export default ShadowingFaqs;