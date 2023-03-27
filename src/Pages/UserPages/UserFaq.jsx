import React from 'react';
import faqImage from '../../Assets/Images/RemoForceHome/Faq.png';

const UserFaq = () => {
    const remoFaqs = [
        {
            faqTitle: 'How does your verification system work',
            faqContent:
                'We use different methods to pay our talents, we understand how payment is fictionalized in different geographies. So we use a combination of crypto, world remit, paypal, moneygram to pay our talents',
        },

        {
            faqTitle: 'What Payment methods do you use?',
            faqContent:
                'We use different methods to pay our talents, we understand how payment is fictionalized in different geographies. So we use a combination of crypto, world remit, paypal, moneygram to pay our talents',
        },
    ];
    return (
        <section className="space-y-4 mt-14 pt-10  lg:w-4/5 w-[90%]  mx-auto ">
            <div className="mb-12 max-md:ml-3 relative">
                {/* Section Title */}
                <h1 className="text-2xl lg:text-4xl text-start relative z-10  font-bold">
                    Frequently Asked Questions
                </h1>
                <img
                    className="absolute lg:-top-7 -top-3 -left-8 lg:-left-10 w-14 lg:w-24"
                    src={faqImage}
                    alt=""
                />
                <p className="text-sm lg:ml-10 text-[#999999]">
                    If you have any further questions please contact us.
                </p>
            </div>
            {remoFaqs &&
                remoFaqs.map((remoFaq, index) => (
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

export default UserFaq;
