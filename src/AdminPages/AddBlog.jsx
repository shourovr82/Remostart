/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useRef, useState } from 'react';

import JoditEditor from 'jodit-react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddBlogs = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const config = {
    placeholder: 'Start typings...',
  };

  // get book Category

  const { data: blogCategories, refetch } = useQuery(['blogCategories'], () =>
    axios.get(`${process.env.REACT_APP_URL}/blog-category`).then((res) => res.data)
  );

  const imgApI = process.env.REACT_APP_IMGBB_API;

  // Posting form data
  const muteFunc = async (data) => axios.post(`${process.env.REACT_APP_URL}/add-blog`, data);

  const { mutate } = useMutation(muteFunc, {
    onSuccess: (res) => {
      if (res.data.message) {
        toast.error(`${res.data.message}`);
        navigate('/dashboard/all-blogs');
        return;
      }

      toast.success('Successfully added a blog');
      navigate('/admin-dashboard/all-blogs');
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
    const image = data.photo[0];
    const formData = new FormData();
    const url = `https://api.imgbb.com/1/upload?key=${imgApI}`;
    formData.append('image', image);
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const booksInfo = {
            ...data,
            image: imgData.data.url,
            postingTime: new Date().toDateString(),
            description: content,
          };
          mutate(booksInfo);
        }
      });
    refetch();
    reset();
  };

  return (
    <div className="grid min-h-90v place-items-center bg-white text-black  ">
      <h2 className="text-xl text-rose-600 font-bold my-10">{error}</h2>
      <div className="w-full  space-y-3 rounded-xl lg:w-60 p-6 shadow-lg text-accent">
        <h1 className="text-center text-2xl font-bold text-black">Add Blogs</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="ng-untouched ng-pristine ng-valid space-y-6"
        >
          <div>
            <label className="label">
              <span className="label-text text-black">Blog Title</span>
            </label>
            <input
              {...register('title', {
                required: true,
                maxLength: 300,
              })}
              type="text"
              id="title"
              placeholder="Blog Title"
              className="  mt-1 w-full p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
            />

            {errors?.title?.type === 'maxLength' && (
              <p className="text-red-500">*Book name cannot exceed 300 characters</p>
            )}
          </div>
          <div>
            <label className="label text-black">
              <span className="label-text text-black">Blog Author Name</span>
            </label>
            <input
              {...register('authorName', {
                required: true,
                maxLength: 300,
              })}
              type="text"
              id="authorName"
              placeholder="Write Blog Author Name"
              className="mt-1 w-full p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
            />

            {errors?.authorName?.type === 'maxLength' && (
              <p className="text-red-500">*Book author name cannot exceed 300 characters</p>
            )}
          </div>

          {/* Category */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-black">Blog Category</span>
            </label>
            <select
              name=""
              id=""
              className="mt-1 w-full p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md "
              {...register('categoryId', { required: true })}
            >
              {blogCategories.map((category) => (
                <option key={category._id} value={category.categoryId}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>

          {/* photo */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black">photo</span>
            </label>
            <input
              type="file"
              {...register('photo', { required: 'Image is required' })}
              className="mt-1 w-full p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md "
            />
            {errors.photo && <p className="text-red-600">{errors.photo?.message}</p>}
          </div>
          {/* description */}
          <div>
            <label htmlFor="summery" className="text-sm text-black">
              Blog summery
              <textarea
                required
                {...register('summery', {
                  minLength: 50,
                })}
                id="summery"
                placeholder="Write blog Summery"
                className="mt-1 w-full p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
              />
              {errors?.summery && (
                <p className="text-red-500">*summery should be minimum 50 Character</p>
              )}
            </label>
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-black">
              Blog Description
              {/* <textarea
                                required
                                {...register('description', {
                                    minLength: 50,
                                })}
                                id="description"
                                placeholder="Write book Description"
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                            />
                            {errors?.description && (
                                <p className="text-red-500">
                                    *Description should be minimum 50 Character
                                </p>
                            )} */}
              <JoditEditor
                className="text-black"
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {}}
              />
            </label>
          </div>

          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;
