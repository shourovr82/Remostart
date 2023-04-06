import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Blog from './Blog';

const CategorizedBlogs = () => {
  // const [CategoryBlogs, setCategoryBlogs] = useState([]);
  const { id } = useParams();
  //     const { data: CategoryBlogs } = useQuery(['CategoryBlogs'], () =>
  //     axios.get(`${process.env.REACT_APP_URL}/category-blogs/${id}`).then((res) => res.data)
  // );
  const CategoryBlogs = useLoaderData();

  // useEffect(() => {
  //     fetch(`${process.env.REACT_APP_URL}/category-blogs/${id}`)
  //         .then((res) => res.json())
  //
  // }, [id]);

  return (
    <div className="container">
      <div className="  grid gap-6  pb-12 grid-cols-1   xl:grid-cols-3 mt-10">
        {CategoryBlogs?.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default CategorizedBlogs;
