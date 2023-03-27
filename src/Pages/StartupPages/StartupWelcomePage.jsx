import React from 'react';
import { Link } from 'react-router-dom';

const StartupWelcomePage = () => (
    <div className="md:h-[100vh]    lg:grid place-items-center justify-center items-center ">
        <div>
            <section className="grid grid-cols-1  lg:grid-cols-2 flex-col space-y-10 my-10  md:space-y-0 md:flex-row justify-center   w-full h-full ">
                <div className="flex flex-col space-y-4  md:space-y-10 text-center  border-r-0 lg:border-r-2  items-center">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
                        <span className="text-[#65DC7F]">Already</span> a Startup ?
                    </h1>

                    <p className="text-sm md:text-base font-semibold px-4 text-center  md:px-6 lg:px-4">
                        {`If you're a registered user of Remostart, you can log in to your account
                        here. Simply enter your email address and password to access your account
                        and start connecting with remote talent.`}
                    </p>

                    <div className="mt-10">
                        <Link
                            to="/startup-signup"
                            className="px-6 py-3 lg:px-10 lg:py-5 bg-[#0B132A] text-white text-xs font-semibold rounded-md"
                        >
                            Sign up your startup
                        </Link>
                    </div>
                    <div>
                        <p className="font-medium">
                            Already Registered ?{' '}
                            <Link
                                to="/login"
                                className="text-blue-700 cursor-pointer hover:border-b-2 hover:border-blue-600 hover:border-spacing-2 duration-300 ease-out"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
                {/* <div className='hidden md:block md:border-l-2 h-[500px]'>
            </div> */}
                <hr className="h-px w-full block md:hidden" />
                <div className="flex flex-col space-y-4  md:space-y-10 text-center  lg:ml-3 items-center">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
                        <span className="text-[#65DC7F]">Create</span> my Project !
                    </h1>

                    <p className="text-sm md:text-base font-semibold px-4 text-center  md:px-6 lg:px-4">
                        Ready to start your project? Remostart makes it easy to connect with remote
                        talent to bring your ideas to life. Sign up for a free account and create
                        your project today.
                    </p>

                    <div className="mt-10">
                        <Link
                            to="/remowelcome"
                            className="px-6 py-3 lg:px-10 lg:py-5 text-xs font-semibold rounded-md border-2 border-black"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    </div>
);

export default StartupWelcomePage;
