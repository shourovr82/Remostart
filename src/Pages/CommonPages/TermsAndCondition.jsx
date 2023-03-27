import React from 'react';

const TermsAndCondition = () => (
    <div className="flex flex-col px-0 md:px-10">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center mt-7 font-bold">
            Terms and Conditions
        </h1>
        <div className="my-4 font-normal text-sm text-start  ">
            <p>
                Welcome to Remostart! By accessing or using our platform, you agree to these terms
                and conditions. Please read them carefully.
            </p>
            <ul className="list-decimal text-justify">
                <li>
                    Use of the Platform Remostart is a platform that connects remote talent with
                    startups and solopreneurs seeking to hire them. By using our platform, you agree
                    to abide by our job working policies, which include requirements such as meeting
                    deadlines and communicating professionally with other platform users. You also
                    agree to treat all other users with respect and not engage in any discriminatory
                    behavior based on race, gender, age, religion, sexual orientation, or any other
                    personal characteristic.
                </li>
                <li>
                    Payment Policy As a user of the Remostart platform, you agree to our payment
                    policy. This policy requires that all payments for work done on the platform be
                    made through our secure payment system. We also require that all users honor the
                    payment arrangements agreed upon for each job. Failure to do so may result in
                    account suspension or termination.
                </li>
                <li>
                    Disclaimer Remostart is not responsible for any content posted by users on our
                    platform, nor do we endorse any particular user or their work. We do our best to
                    verify the credentials and experience of our remote talent, but we cannot
                    guarantee the accuracy of this information or the quality of their work. We
                    recommend that users exercise caution and perform their own due diligence before
                    entering into any business relationships on our platform.
                </li>
                <li>
                    Intellectual Property All content and intellectual property posted on the
                    Remostart platform remains the property of its respective owner. By posting
                    content on our platform, you grant us a non-exclusive, transferable,
                    sub-licensable, royalty-free, worldwide license to use, copy, modify, create
                    derivative works based on, distribute, and publicly display that content in any
                    media format and through any media channels.
                </li>
                <li>
                    User Conduct As a user of Remostart, you agree to abide by all applicable laws
                    and regulations. You also agree not to engage in any activity that may damage,
                    disrupt, or interfere with the functioning of our platform or our users’ ability
                    to access and use it.
                </li>
                <li>
                    Termination Remostart reserves the right to terminate or suspend any user’s
                    access to the platform for any reason, including but not limited to a breach of
                    these terms and conditions.
                </li>
                <li>
                    Governing Law These terms and conditions shall be governed by and construed in
                    accordance with the laws of the jurisdiction in which Remostart is based.
                </li>
            </ul>
            <p> Thank you for using Remostart!</p>
        </div>
        <hr className="h-[2px]" />
        <div className="flex justify-center items-center my-3 space-x-4">
            <button type="button" className="bg-[#65DC7F] px-10 py-2 font-medium rounded-md">
                Accept
            </button>
            <button type="button" className="bg-[#F00C18] px-10 py-2 font-medium rounded-md">
                Reject
            </button>
        </div>
    </div>
);

export default TermsAndCondition;
