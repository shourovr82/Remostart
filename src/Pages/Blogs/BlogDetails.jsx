/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiFillLike, AiOutlineShareAlt } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { FaRegComments } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from 'react-share';
import { toast as toastify } from 'react-toastify';


const BlogDetails = () => {
    const [comments, setComments] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [likeStatus, setLikeStatus] = useState(false);
    const [likeCount, setLikeCount] = useState([]);
    const {  user} = useSelector((state) => state.auth);

    const { id } = useParams();
    const { data: blog, refetch } = useQuery(['blog'], () =>
        axios.get(`${process.env.REACT_APP_URL}/blogs/${id}`).then((res) => res.data)
    );

    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/comments/${id}`)
            .then((res) => res.json())
            .then((data) => {
        
                setComments(data);
                refetch();
            });

        refetch();
    }, [id, refetch]);
  

    // const { data: comments} = useQuery(['comments'], () =>
    //     axios.get(`${process.env.REACT_APP_URL}/comments/${id}`).then((res) => res.data)
    // );

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/like/${id}`)
            .then((res) => res.json())
            .then((data) => {
                const status = data?.like?.find((liked) => liked?.email === user?.email);
            

                if (status) {
                    setLikeStatus(true);
                } else {
                    setLikeStatus(false);
                }
                setLikeCount(data?.like);
            });
    }, [id, user?.email]);

    // const { data: likes} = useQuery(['likes'], () =>
    //     axios.get(`${process.env.REACT_APP_URL}/like/${id}`).then((res) => res.data)
    // );
    const shareUrl = `https://remostart-daf09.web.app/blog-details/${id}`;



    const handleClick = () => {
        fetch(`${process.env.REACT_APP_URL}/like?id=${id}&email=${user?.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
              
                refetch();
                setLikeStatus(true);
                setLikeCount(blog?.like);
            })
            .then(() => {
                fetch(`${process.env.REACT_APP_URL}/like/${id}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setLikeCount(data?.like);
                    });
            })
            .catch((err) => {
                console.error(err);
            });
        refetch();
    };

    // Posting form data
    const muteFunc = async (data) => axios.post(`${process.env.REACT_APP_URL}/comment/${id}`, data);

    const { mutate } = useMutation(muteFunc, {
        onSuccess: (res) => {
            if (res.data.message) {
                toast.error(`${res.data.message}`);

                return;
            }
            refetch();
            toast.success('Successfully added a comment');
        },
        onError: () => toast.error('There is an error'),
    });
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({ mode: 'onChange' });

    const onSubmit = (data) => {
        if (!user.user._id) {
            toast.error('You must log in to comment');
            return;
        }

        const comment = {
            ...data,
            user: user?.displayName,
            userPhoto: user?.photoURL,
            time: new Date(),
        };
  
        mutate(comment);
        //   document.location.reload(true)
        fetch(`${process.env.REACT_APP_URL}/comment/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(comment),
        })
            .then((res) => res.json())
            .then((d) => {
         
            })
            .then(() => {
                fetch(`${process.env.REACT_APP_URL}/comments/${id}`)
                    .then((res) => res.json())
                    .then((data) => {
                    
                        setComments(data);
                        refetch();
                    });
            })
            .catch((err) => {
                console.error(err);
            });

        refetch();
        reset();
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl);
        toastify.success('Blog Link copied');
    };

    return (
        <div className="bg-white grid min-h-screen place-items-center">
            <div className=" container overflow-hidden dark:bg-secondary rounded-lg shadow-lg ">
                <img
                    className="object-cover w-full h-64"
                    src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="Article"
                />

                <div className="p-6">
                    <div>
                        <div className="flex flex-wrap justify-between">
                            <div className="flex space-x-2 text-sm ">
                                <HashLink to="#comment">
                                    <button
                                        type="button"
                                        className="flex items-center p-1 space-x-1.5 text-black"
                                    >
                                        <FaRegComments />
                                        <span>{comments?.length}</span>
                                    </button>
                                </HashLink>

                                {likeStatus && (
                                    <button
                                        onClick={handleClick}
                                        type="button"
                                        className="flex items-center p-1 space-x-1.5 text-black"
                                    >
                                        <AiFillLike className="text-sky-500" />
                                        <span>{(likeCount && likeCount.length) || 0}</span>
                                    </button>
                                )}
                                {!likeStatus && (
                                    <button
                                        onClick={handleClick}
                                        type="button"
                                        className="flex items-center p-1 space-x-1.5 text-black"
                                    >
                                        <BiLike />
                                        <span>{(likeCount && likeCount.length) || 0}</span>
                                    </button>
                                )}

                                {/* <button onClick={handleClick} type="button" className="flex items-center p-1 space-x-1.5 text-black">
            {likeStatus ? <AiFillLike className='text-sky-500'/> : <BiLike />}
				<span>{likeCount && likeCount.length || 0}</span>
			</button> */}

                                {/* <button aria-label="Bookmark this post" type="button" className="p-2 text-black">
				<BsBookmarkPlus/>
			</button> */}
                            </div>
                            <div className="space-x-2 flex items-center">
                                <button
                                    onClick={() => handleCopy()}
                                    aria-label="Share this post"
                                    type="button"
                                    className="p-2 text-center text-black"
                                >
                                    <AiOutlineShareAlt />
                                </button>
                                <span className="space-x-1">
                                    <FacebookShareButton
                                        url={shareUrl}
                                        quote="title"
                                        hashtag="#blog"
                                    >
                                        <FacebookIcon size={22} round />
                                    </FacebookShareButton>
                                    <FacebookMessengerShareButton
                                        url={shareUrl}
                                        quote="title"
                                        hashtag="#blog"
                                    >
                                        <FacebookMessengerIcon size={22} round />
                                    </FacebookMessengerShareButton>

                                    <WhatsappShareButton
                                        url={shareUrl}
                                        quote="title"
                                        hashtag="#blog"
                                    >
                                        <WhatsappIcon size={22} round />
                                    </WhatsappShareButton>
                                    <TwitterShareButton
                                        url={shareUrl}
                                        quote="title"
                                        hashtag="#blog"
                                    >
                                        <TwitterIcon size={22} round />
                                    </TwitterShareButton>
                                    <LinkedinShareButton
                                        url={shareUrl}
                                        quote="title"
                                        hashtag="#blog"
                                    >
                                        <LinkedinIcon size={22} round />
                                    </LinkedinShareButton>

                                    <TelegramShareButton
                                        url={shareUrl}
                                        quote="title"
                                        hashtag="#blog"
                                    >
                                        <TelegramIcon size={22} round />
                                    </TelegramShareButton>
                                </span>
                            </div>
                        </div>
                        <h2 className="text-4xl text-black my-5">{blog?.title}</h2>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img
                                    className="object-cover h-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                                    alt="Avatar"
                                />
                                <div>
                                    <p className="mx-2 font-semibold text-gray-600 dark:text-gray-500">
                                        {blog.authorName}
                                    </p>
                                    <p className="mx-2 pt-1 text-xs text-gray-600 dark:text-gray-300 font-semibold">
                                        {blog?.postingTime}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className="container p-6 my-10 text-black"
                        dangerouslySetInnerHTML={{ __html: blog?.description }}
                    />

                    <form
                        id="comment"
                        onSubmit={handleSubmit(onSubmit)}
                        className="container ng-untouched ng-pristine ng-valid shadow-lg pb-6 "
                    >
                        {' '}
                        <div className="text-center p-6 ">
                            <label htmlFor="comments" className="text-xl text-black">
                                Share Your Thoughts
                                <textarea
                                    required
                                    {...register('comments', {
                                        minLength: 4,
                                    })}
                                    id="comments"
                                    placeholder="Write a comment"
                                    className="w-full rounded-md focus:ring my-5 focus:ring-opacity-75 focus:ring-violet-400 "
                                />
                                {errors?.comments && (
                                    <p className="text-red-500">
                                        *Comments should be minimum 4 Character
                                    </p>
                                )}
                            </label>
                        </div>
                        <div className="grid justify-end p-6  items-center  m-0 ">
                            {user.user?._id ? (
                                <button type="submit" className="button ">
                                    Submit
                                </button>
                            ) : (
                                <Link to="/login">
                                    <button type="submit" className="button ">
                                        Login to Submit
                                    </button>
                                </Link>
                            )}
                        </div>
                    </form>

                    <p className=" p-3 text-xl my-5 text-black">
                        comments({(comments && comments?.length) || 0})
                    </p>

                    <div className="">
                        {comments &&
                            comments?.map((comment) => (
                                <div
                                    className="p-4 py-6 space-y-2 shadow-lg   m-5 rounded text-black"
                                    key={Math.random()}
                                >
                                    <p className="font-semibold">{comment?.user}</p>
                                    <p>{comment?.comments}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
