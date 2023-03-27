/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const StartupContactUs = () => (
    <section className="w-full max-w-2xl px-6 py-4 mx-auto rounded-md ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mt-10">Contact Us</h1>

        <p className="mt-3 text-center text-gray-600 font-normal text-xs md:text-sm">
            Reach out to us by sharing your thoughts
        </p>

        <div className="mt-6 ">
            <div className="items-center lg:-mx-2 md:flex">
                <div className="w-full lg:mx-2">
                    <label className="block mb-2 text-sm font-medium text-gray-600 ">Name</label>

                    <input
                        className="block w-full px-4 py-2 text-gray-700 bg-white border   border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300  focus:outline-none focus:ring focus:ring-opacity-40"
                        type="text"
                    />
                </div>

                <div className="w-full lg:mx-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-medium text-gray-600 ">E-mail</label>

                    <input
                        className="block w-full px-4 py-2 text-gray-700 bg-white border  border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300  focus:outline-none focus:ring focus:ring-opacity-40"
                        type="email"
                    />
                </div>
            </div>

            <div className="w-full mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 ">Message</label>

                <textarea className="block w-full h-40 px-4 mt-5 py-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
            </div>

            <div className="flex justify-center mt-6">
                <button
                    type="button"
                    className="px-6 py-3 lg:px-10 lg:py-4 bg-[#0B132A] text-white text-xs font-semibold rounded-md"
                >
                    Submit
                </button>
            </div>
            <div className="mx-auto text-center mt-5">
                <p className="font-normal text-xs md:text-sm">
                    By subscribing to newsletter you agree with our{' '}
                    <Link to="" className="text-blue-600 underline">
                        Privacy Policy
                    </Link>
                </p>
            </div>
        </div>
    </section>
);

export default StartupContactUs;
