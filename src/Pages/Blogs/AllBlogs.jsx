import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Blog from './Blog';

const AllBlogs = () => {
  // const [allBlogs, setAllBlogs] = useState([]);

  // useEffect(() => {
  //     fetch(`${process.env.REACT_APP_URL}/blog-category`)
  //         .then((res) => res.json())
  //         .then((data) => {

  //             setAllBlogs(data);
  //         });
  // }, []);

  const { data: allBlogs } = useQuery(['allBlogs'], () =>
    axios.get(`${process.env.REACT_APP_URL}/blogs`).then((res) => res.data)
  );

  return (
    <div>
      <div className=" text-center ">
        <p className="text-black text-2xl py-5">Explore Our Blogs</p>
        <div className=" w-full h-full grid gap-6  grid-cols-1   xl:grid-cols-3 py-10">
          {allBlogs?.map((blog) => (
            <Blog key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
