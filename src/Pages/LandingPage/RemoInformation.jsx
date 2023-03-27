import React from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import item3 from '../../Assets/Images/OrderPlaced.svg';
import item2 from '../../Assets/Images/Stock_4.svg';
import item1 from '../../Assets/Images/Welcome.svg';

const RemoInformation = () => {
    const Items = [
        {
            id: 1,
            heading: 'Mission',
            paraText:
                'To support startups in building high-performing and diverse teams. We encourage unique perspectives in the workplace by promoting diversity and inclusiveness, hence fostering collaborations and improve work culture.',
            logo: item2,
            url: (
                <Link className="text-[#19A5FF] mt-8" to="/">
                    Learn More <HiArrowLongRight className="inline-block text-xl" />
                </Link>
            ),
        },
        {
            id: 2,
            heading: 'Remo-Force',
            paraText:
                'We believe in fostering a fair and inclusive work environment where all job seekers have equal opportunities to showcase their abilities and talents."We are committed to diversity and creating a level playing field for all to succeed."',
            logo: item1,
            url: (
                <Link className="text-[#19A5FF] mt-8" to="/remoforce">
                    Learn More <HiArrowLongRight className="inline-block text-xl" />
                </Link>
            ),
        },
        {
            id: 3,
            heading: 'Startups',
            paraText:
                'Ethical-based startups partner with us to achieve their DEI goals while saving 20-30% on talent costs. We offer a range of remote talent services. Contact us to benefit from equitable and cost-effective talent solutions.',
            logo: item3,
            url: (
                <Link className="text-[#19A5FF] mt-8" to="/startup">
                    Learn More <HiArrowLongRight className="inline-block text-xl" />
                </Link>
            ),
        },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4">
            {Items.map((item) => (
                <div className="p-6" key={item?.id}>
                    <img
                        src={item.logo}
                        alt=""
                        className="object-cover object-center w-full h-72 rounded-md aspect-square"
                    />
                    <div className="mt-6 mb-2 text-center">
                        <h2 className="text-xl font-semibold">{item.heading}</h2>
                    </div>
                    <p className="font-normal text-base md:text-sm lg:text-base text-center mt-3">
                        {item.paraText}
                    </p>
                    <div className="text-center">{item.url}</div>
                </div>
            ))}
        </div>
    );
};

export default RemoInformation;
