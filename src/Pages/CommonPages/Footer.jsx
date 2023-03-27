/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BsEnvelope } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/logoBlack.svg';
import discord from '../../Assets/SocialIcons/discord.png';
import insta from '../../Assets/SocialIcons/insta.png';
import linkedin from '../../Assets/SocialIcons/linkedIn.png';
import twitter from '../../Assets/SocialIcons/twitter.png';
import whatsapp from '../../Assets/SocialIcons/whatspp.png';

const Footer = () => (
    <div className="text-black">
        <footer className="flex justify-center items-center mt-10">
            <div className="items-center w-full pt-6">
                <div className="flex flex-col justify-between w-full px-4 sm:px-10 md:px-10 md:flex-row gap-3">
                    <div className="flex w-full justify-between md:justify-start md:gap-x-14 lg:gap-x-20 md:items-start md:w-1/2">
                        <div className="flex flex-col leading-7 items-start space-y-2">
                            <h1 className="text-lg font-semibold">CATEGORY</h1>
                            <Link className="hover:text-cyan-600 text-sm" to="/">
                                Home
                            </Link>
                            <Link className="hover:text-cyan-600 text-sm" to="/startup">
                                Startup
                            </Link>
                            <Link className="hover:text-cyan-600 text-sm" to="/remoforce">
                                Remo-Force
                            </Link>
                            <Link className="hover:text-cyan-600 text-sm" to="/services">
                                Services
                            </Link>
                        </div>

                        <div className="flex flex-col leading-7 space-y-2">
                            <h1 className="text-lg font-semibold">LINKS</h1>
                            <Link className="hover:text-cyan-600 text-sm" to="">
                                Menu
                            </Link>
                            <Link className="hover:text-cyan-600 text-sm" to="/blog">
                                Blog
                            </Link>
                            <Link className="hover:text-cyan-600 text-sm" to="">
                                Our Team
                            </Link>
                            <Link className="hover:text-cyan-600 text-sm" to="">
                                Contacts
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col mx-auto md:flex-row w-full md:w-1/2 justify-end">
                        <div className="flex  flex-col ">
                            <span className="text-md font-bold mb-2">SUBSCRIBE</span>
                            <div>
                                <div className="flex flex-col justify-start items-start md:flex-row flex-wrap gap-2 md:items-center w-full ">
                                    <div className="flex items-center w-full md:w-max bg-transparent text-black space-x-2 drop-shadow-sm shadow-transparent rounded-md border px-2 md:px-5  focus:outline-none">
                                        <BsEnvelope className="text-xl" />
                                        <input
                                            className="outline-none w-full border-none focus:ring-0 bg-transparent py-3"
                                            type="email"
                                            placeholder="Your Email Id"
                                        />
                                    </div>
                                    <div className="mx-auto md:mx-0">
                                        <button
                                            type="button"
                                            className="py-3 px-4  rounded-md text-white bg-[#65DC7F]"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs pt-2 ">
                                By subscribing to newsletter you agree with our{' '}
                                <Link to="#" className="text-blue-800">
                                    Privacy Policy
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <hr className="md:overflow-hidden  bg-[#19A5FF] h-[2px] mx-auto mt-5" />
                </div>
                <div className="flex  flex-col justify-between w-full md:px-10 px-4 sm:px-10 md:flex-row">
                    <div className="flex flex-col">
                        <img src={logo} className="w-20 mt-5" alt="logo" />
                        <p className="text-xs mt-3 mb-6">Your home of diversity and equity</p>
                    </div>
                    <div className="flex place-items-center justify-center space-x-3 mb-4 md:mb-0">
                        <a href="https://discord.gg/57ER8DXbGu" target="_blank" rel="noreferrer">
                            <img src={discord} alt="" className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/remo-start/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={linkedin} alt="" className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.instagram.com/remostart_/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={insta} alt="" className="w-6 h-6" />
                        </a>
                        <a
                            href="https://twitter.com/RemoStart?s=20&t=azfVLLaKPFY9uxYrLCUvaA"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={twitter} alt="" className="w-6 h-6" />
                        </a>
                        <a
                            href="https://chat.whatsapp.com/HfwEMRxUVaSBhZJV3R9Tjg"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={whatsapp} alt="" className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
);

export default Footer;
