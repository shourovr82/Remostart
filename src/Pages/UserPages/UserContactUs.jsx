import React from 'react';

const UserContactUs = () => (
    <section className="w-full max-w-2xl px-6 py-4 mx-auto rounded-md ">
        <h1 className="text-4xl text-center font-bold mt-20">Contact Us</h1>

        <p className="mt-3 text-center font-semibold text-base">
            Still have further questions? contact us directly
        </p>

        <div className="mt-6 ">
            <div className="items-center -mx-2 md:flex">
                <div className="w-full mx-2">
                    <label className="block mb-2 text-sm font-medium text-gray-600 ">Name</label>

                    <input
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400 focus:ring-blue-300  focus:outline-none focus:ring focus:ring-opacity-40"
                        type="text"
                    />
                </div>

                <div className="w-full mx-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-medium text-gray-600 ">E-mail</label>

                    <input
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400 focus:ring-blue-300  focus:outline-none focus:ring focus:ring-opacity-40"
                        type="email"
                    />
                </div>
            </div>

            <div className="w-full mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 ">Message</label>

                <textarea className="block w-full h-40 px-4 mt-5 py-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
            </div>

            <div className="flex justify-center mt-6">
                <button
                    type="submit"
                    className="px-10 py-4 bg-[#0B132A] text-white text-xs font-semibold rounded-md"
                >
                    Submit
                </button>
            </div>
            <div className="mx-auto text-center mt-5">
                <p className="font-normal text-[15px]">
                    By subscribing to newsletter you agree with our{' '}
                    <span className="text-blue-600 underline">Privacy Policy</span>
                </p>
            </div>
        </div>
    </section>
);

export default UserContactUs;
