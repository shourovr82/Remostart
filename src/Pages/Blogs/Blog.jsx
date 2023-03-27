import React, { useContext, useState } from 'react';
import { BiComment, BiLike } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {
    FacebookIcon, FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton, TwitterIcon,
    TwitterShareButton
} from 'react-share';


const Blog = ({ blog }) => {
    const [likeStatus, setLikeStatus] = useState(false);
    const [likeCount, setLikeCount] = useState([]);
   

    const shareUrl = `https://remostart-daf09.web.app/blog-details/${blog._id}`;

    return (
        <div className="  ">
            <div className=" flex md:mx-10 xl:mx-0 shadow-xl flex-col md:flex-row xl:flex-col items-center p-4 bg-white border-2 border-gray-200 rounded-lg dark:bg-gray-800 h-full">
                <div className="flex flex-col w-full md:w-1/2 xl:w-full">
                    <div>
                        <img
                            alt="mountain"
                            className=" w-full aspect-square rounded-md border-2 border-gray-300"
                            src={blog?.image}
                        />
                    </div>
                    <div className="flex space-x-3 mt-2 text-black">
                        <div className="flex space-x-2 items-center">
                            <BiLike className="inline-block text-xl" />
                            <span className="font-bold">
                                {(blog.like && blog?.like.length) || 0}
                            </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <BiComment className="inline-block text-xl" />
                            <span className="font-bold">
                                {(blog?.comments && blog?.comments.length) || 0}
                            </span>
                        </div>
                    </div>
                </div>
                <div id="body" className="w-full md:w-1/2 xl:w-full flex flex-col ml-5">
                    <h4 id="name" className="text-xl text-left font-semibold mb-2 text-black">
                        {blog?.title}
                    </h4>
                    <p id="job" className="text-left mt-2 text-black">
                        {blog?.summery && blog?.summery.slice(0, 100)}...
                        <Link id='read-more' to={`/blog-details/${blog._id}`}  className="text-left mt-2 text-blue" >read more </Link>
                        {/* <a href={shareUrl}>read more</a> */}
                    </p>
                    <div className="flex mt-5">
                        <img
                            alt="avatar"
                            className="w-6 rounded-full border-2 border-gray-300"
                            src="https://picsum.photos/seed/picsum/200"
                        />
                        <p className="ml-3 text-black">{blog.authorName}</p>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <Link
                            to={`/blog-details/${blog._id}`}
                            className="px-7 py-3 bg-[#0B132A] text-white text-xs font-semibold rounded-md"
                        >
                            Details
                        </Link>
                        <div className="grid grid-cols-4 place-items-center space-x-3 text-black">
                            <FacebookShareButton url={shareUrl} quote="title" hashtag="#blog">
                                <FacebookIcon borderRadius={5} className="text-black" size={22} />
                            </FacebookShareButton>
                            <TwitterShareButton url={shareUrl} quote="title" hashtag="#blog">
                                <TwitterIcon borderRadius={5} size={22} />
                            </TwitterShareButton>
                            <LinkedinShareButton url={shareUrl} quote="title" hashtag="#blog">
                                <LinkedinIcon size={22} borderRadius={5} />
                            </LinkedinShareButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
