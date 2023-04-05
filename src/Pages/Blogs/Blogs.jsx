/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Blogs = () => {
  // const [allCategory, setCategoryBlogs] = useState([]);

  // useEffect(() => {
  //     fetch(`${process.env.REACT_APP_URL}/blog-category`)
  //         .then((res) => res.json())
  //         .then((data) => {

  //             setCategoryBlogs(data);
  //         });
  // }, []);

  const { data: allCategory } = useQuery(['allCategory'], () =>
    axios.get(`${process.env.REACT_APP_URL}/blog-category`).then((res) => res.data)
  );

  const active = 'px-5 py-1 rounded-3xl text-white bg-[#0B132A]';
  const inActive = 'border-2 text-black px-5 py-1 rounded-3xl border-black';

  return (
    <div className="bg-white">
      {/* <div className="hero min-h-screen " style={{ backgroundImage: `url(${BlogImage})` }}>
                <div className="hero-overlay bg-neutral bg-opacity-80" />
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl mt-72">
                        <h1 className="mb-5 text-5xl font-bold">
                            Remo-Start&#39;s inspiring articles{' '}
                        </h1>

                        <Link to="#topics" type="button" className="btn btn-secondary">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div> */}
      {/* <div className="container mt-20 bg-primary p-5 ">
                <p className=" py-5 text-2xl text-center ">Popular Tags</p>
                <div className="grid grid-flow-col auto-cols-fr gap-5 ">
                    {allCategory?.map((category) => (
                        <Tags key={category._id} category={category} />
                    ))}
                </div>
            </div> */}
      {/* <div className="">
                <h1 id="topics" className="text-4xl font-semibold pt-20 text-black">
                    Topic match for you
                </h1>
                <nav className="list-none my-10 gap-4 flex flex-wrap ">
                    {allCategory?.map((category) => (
                        <li key={category._id}>
                            <NavLink
                                to={`/category/${category.categoryId}`}
                                className={({ isActive }) => (isActive ? active : inActive)}
                            >
                                {category.categoryName}
                            </NavLink>
                        </li>
                    ))}
                </nav>
            </div> */}

      <Outlet />
    </div>
  );
};

export default Blogs;
