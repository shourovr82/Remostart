/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import user from '../../Assets/Images/me.jpg';

const UserTestimonial = () => {
    const items = [
        {
            id: 1,
            pTag: `I've always had trouble finding job opportunities that fit my lifestyle, as I have a disability that limits my mobility. But thanks to Remostart, I found a remote job. I'm grateful for this platform and the opportunities it gives to persons with disability like me.`,
            name: 'Lihov Sergey',
            postion: 'UI/UX designer',
            img: user,

        },
        {
            id: 2,
            pTag: `As a person of color, I've faced discrimination in traditional workplaces. But with Remostart, I was able to find a remote job where I'm judged solely on my skills and experience. I'm grateful for the opportunity to work in a more equitable environment.`,
            name: 'Lihov Sergey',
            postion: 'UI/UX designer',
            img: user,

        },
        {
            id: 3,
            pTag: `I'm a recent immigrant to this country, and finding a job with a language barrier has been a challenge. But Remostart helped me find a remote job that allows me to work in my native language. I'm so thankful fordiscovering  this platform`,
            name: 'Lihov Sergey',
            postion: 'UI/UX designer',
            img: user,

        },
        {
            id: 4,
            pTag: `As a Black African woman finding job opportunities that fit my skills and qualifications has been a struggle. But thanks to Remostart, I was able to find a remote job that allows me to work from home and still earn a decent income."`,
            name: 'Lihov Sergey',
            postion: 'UI/UX designer',
            img: user,

        },
        {
            id: 5,
            pTag: `As an Asian American, I've often felt overlooked and undervalued in traditional workplaces. But with Remostart, I was able to find a remote job where my skills and experience are appreciated and celebrated. I feel like I can be my authentic self at work.`,
            name: 'Lihov Sergey',
            postion: 'UI/UX designer',
            img: user,

        },
        {
            id: 6,
            pTag: `I'm from a small town in a developing country in Africa, and finding job opportunities that pay well and allow me to use my skills has been a challenge. But with Remostart, I was able to find a remote job that pays well and allows me to work globally.`,
            name: 'Lihov Sergey',
            postion: 'UI/UX designer',
            img: user,

        },
    ]

    return (
        <section className="flex  flex-col ">
            <div className=' w-1/2 mx-auto '>
                <p className='ml-16 text-xl font-semibold'>          A</p>
                <h1 className="text-2xl mt-5 md:text-3xl lg:text-5xl  font-bold text-center">
                   A
                </h1>

            </div>
            <div className=' px-2 testimonialBg hidden md:px-8 mt-0 lg:mt-10 md:flex justify-center items-center py-10 lg:py-5'>
                <div className='mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 xl:gap-10'>
                    {
                        items.map(item =>
                            <div key={item.id} className='flex flex-col p-6 border border-[#adadad] rounded-md'>
                                <p className='text-[18px] text-[#999999] font-normal'>{item.pTag}</p>
                                <div className='flex  mt-5'>
                                    {/* <img src={item.img} className='w-14 rounded-full' alt="" /> */}
                                    <div className='flex text-center w-full flex-col px-2 space-y-2 justify-center'>
                                        <span className='text-base font-medium'>
                                            {item.name}
                                        </span>
                                        <span className='font-normal text-sm text-[#7B7B7B]'>
                                            {item.postion}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
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
                    <div key={item.id} className="flex flex-col p-8 border rounded-md lg:hidden">
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
        </section>
    );
};

export default UserTestimonial;
