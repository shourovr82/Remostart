/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import user from '../../Assets/Images/me.jpg';

const StartupTestimonial = () => {
    const items = [
        {
            id: 1,
            pTag:
                'Our startup needed to expand our development team, but we had trouble finding local talent with the skills we needed. Remostart helped us find remote developers from all over the world, and now our team is stronger than ever',
            name: 'Shrutika Patle',
            postion: 'UI/UX designer',
            img: user,
        },
        {
            id: 2,
            pTag:
                'As a small startup, we had a limited budget for hiring, but we still needed top-tier talent to help us grow. Remostart helped us find remote professionals who were highly qualified and affordable, and now our team is a force to be reckoned with',
            name: 'Amisha Dipte',
            postion: 'UI/UX designer',
            img: user,
        },
        {
            id: 3,
            pTag:
                'Our startup is focused on social impact, and we wanted to build a team that reflected our values and mission. Remostart helped us find remote talent from diverse backgrounds and locations, and now our team is making a positive impact around the world.',
            name: 'Lihov Sergey',
            postion: 'Nawar Ali',
            img: user,
        },
        {
            id: 4,
            pTag:
                'Our startup is in a highly specialized field, and finding people with the right skills and experience was a challenge. But Remostart helped us find remote professionals who had the exact expertise we were looking for. While remaining cheaper than alternatives',
            name: 'Lihov Sergey',
            postion: 'Amit Sharma',
            img: user,
        },
        {
            id: 5,
            pTag:
                'Our startup is growing rapidly, we needed to hire quickly and efficiently. Remostart helped us find remote talent who were available immediately and who could hit the ground running. I’m grateful for the speed and quality of the hiring process through thiem',
            name: 'Aman Kumar',
            postion: 'UI/UX designer',
            img: user,
        },
        {
            id: 6,
            pTag:
                'We are based in a small town, and finding talent with right skills was a challenge. Remostart helped us find remote professionals with the exact skills and experience we were looking for, now our team is more diverse and talented than we ever thought.',
            name: 'Daniel Dan',
            postion: 'UI/UX designer',
            img: user,
        },
    ]
    return (
        <section className="flex flex-col mt-10">
            <h1 className="text-2xl md:text-3xl lg:text-5xl mt-7 font-bold text-center">
                Customer Reviews
            </h1>
            <div className="mt-10 hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (

                    <div
                        key={Math.random()}
                        className="flex flex-col p-8 border rounded-md"
                    >
                        <p className="text-sm font-normal">{item.pTag}</p>
                        <div className="flex mt-5">
                            {/* <img src={item.img} className="w-14 rounded-full" alt="" /> */}
                            <div className="flex  text-center w-full flex-col px-2 space-y-2 justify-center">
                                <span className="text-base font-medium">{item.name}</span>
                                <span className="font-normal text-xs text-gray-600">
                                    {item.postion}
                                </span>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

            {/* carousel for mobile device */}

            <Carousel
                className="mt-10 block lg:hidden"
                showThumbs={false}
                showArrows={true}
                showStatus={true}
                autoPlay={true}
                infiniteLoop={true}
            >
                {items.map((item) => (

                    <div key={item.id} className="flex flex-col p-8 border rounded-md">
                        <p className="text-xs font-normal text-left">{item.pTag}</p>
                        <div className="flex mt-5">
                            {/* <img src={item.img} className="!w-14 rounded-full" alt="" /> */}
                            <div className="flex flex-col px-2 space-y-2 justify-center">
                                <span className="text-base font-medium">{item.name}</span>
                                <span className="font-normal text-xs text-gray-600">
                                    {item.postion}
                                </span>
                            </div>
                        </div>
                    </div>

                ))}
            </Carousel>
        </section >
    );
};

export default StartupTestimonial;
