/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal';

const AllBlogsList = () => {
  const [deleteProduct, setDeleteProduct] = useState(null);

  const { data: allBlogs, refetch } = useQuery(['allBlogs'], () =>
    axios.get(`${process.env.REACT_APP_URL}/blogs`).then((res) => res.data)
  );

  const handleDelete = (blog) => {
    axios
      .delete(`${process.env.REACT_APP_URL}/blog/${blog._id}`, {
        // headers: {
        //     authorization: `bearer ${localStorage.getItem('accessToken')}`,
        // },
      })
      .then((res) => {
        if (res.data.deletedCount) {
          refetch();
          toast.success(`${blog?.authorName}s blog deleted successfully`);
        }
      });
  };
  const closeModal = () => {
    setDeleteProduct(null);
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="container">
        <h1 className="text-center text-black text-2xl mb-8">All Blogs</h1>
        <div className="overflow-x-auto text-black">
          <table className=" bg-slate-200 w-full">
            <thead>
              <tr>
                <th className="py-2 px-4">Serial</th>
                <th>Blogs Name</th>
                <th>Author</th>
                <th>Update</th>

                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {allBlogs.map((blog, i) => (
                <tr key={blog._id} className="bg-white odd:bg-gray-300 py-2 px-6 text-center">
                  <th>{i + 1}</th>
                  <td className="py-2 px-4">{blog?.title}</td>
                  <td>{blog?.authorName}</td>
                  <td>
                    <div className="flex justify-end  item-center">
                      <Link to={`/admin-dashboard/all-blogs/edit/${blog._id}`}>
                        <button type="button" className="button">
                          Update
                        </button>
                      </Link>
                    </div>
                  </td>

                  <td>
                    <button
                      type="button"
                      onClick={() => setDeleteProduct(blog)}
                      className="button bg-red-500 "
                    >
                      <label className=" cursor-pointer " htmlFor="confirmation-modal">
                        Delete
                      </label>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {deleteProduct && (
          <ConfirmationModal
            title="Are you sure you want to delete?"
            message={`If you delete ${deleteProduct?.bookName}. It cannot be undone.`}
            successAction={handleDelete}
            successButtonName="Delete"
            modalData={deleteProduct}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default AllBlogsList;
