import Cookies from 'js-cookie';
import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../Assets/UserComponentImages/userHeaderLogo.png';
import UserSection1 from './UserSection1';

const UserBanner = () => {
    const role = Cookies.get('userRole');
    return (
        <section className="remoforceBanner">
            <section className="lg:grid lg:grid-cols-5 items-center flex flex-col-reverse  md:flex-row  justify-between w-full lg:mt-11 ">
                {/* banner left content */}
                <section className="flex col-span-3 ml-0 lg:ml-10  flex-col w-full justify-center">
                    <h1 className="font-sans font-bold text-xl md:text-3xl lg:text-5xl lg:leading-tight my-9 lg:my-12 ">
                        Find the job that suits <br className="max-md:hidden" /> your profession
                        from <br className="max-md:hidden" /> your home !{' '}
                    </h1>
                    {/* <h1 className=''>
                      
                    </h1> */}
                    <p className="lg:mt-3 text-xs lg:text-base lg:font-semibold text-[#999999]">
                        Cut the crap! We know how hard it is to get remote work,{' '}
                        <br className="max-md:hidden" /> especially if you are from underrepresented
                        regions of the <br className="max-md:hidden" /> world, probably your search
                        has brought you here, you never <br className="max-md:hidden" /> gave up,
                        you found us, a community dedicated to you
                    </p>
                    <div className="flex max-sm:flex-col text-center mt-5 max-sm:w-4/5 max-sm:mx-auto  max-sm:justify-center max-sm:gap-2 lg:mt-8 gap-5 ">
                    {!role ? (
                        <Link
                            to="/signup"
                            className="px-6 py-3 lg:px-10 lg:py-5 bg-[#0B132A] border-black border-2 text-white text-xs font-semibold rounded-md"
                        >
                            Create your profile
                        </Link>
                        ) : (
                        ''
                    )}

                        <Link to="/remoforce-dashboard/all-jobs">
                            <button
                                type="button"
                                className="px-6 py-3 lg:px-10 lg:py-5 text-xs font-semibold rounded-md border-2 border-black"
                            >
                                Search Remote Jobs
                            </button>
                        </Link>
                    </div>
                </section>

                {/* banner right logo */}
                <section className="w-full col-span-2 max-md:px-4  pt-4">
                    <img className="aspect-[7/6]" src={headerLogo} alt="LandingPageLogo" />
                </section>
            </section>
            <UserSection1 />
        </section>
    );
};

export default UserBanner;
