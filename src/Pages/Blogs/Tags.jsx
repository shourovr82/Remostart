import React from 'react';
import { Link } from 'react-router-dom';

const Tags = ({ category: { categoryName, categoryImage, categoryId
} }) => (
    <div>
        <div className="card w-full h-36 bg-base-100 shadow-xl  image-full">
            <figure>
                <img className='w-full' src={categoryImage} alt="img" />
            </figure>
            <div className="card-body grid place-items-end p-2 ">
                <div className="card-actions ">
                   <Link to={`/blogs/category/${categoryId}`}>
                   <button type="button" className="btn text-white btn-outline text-xs">
                        {categoryName}
                    </button>
                   </Link>
                </div>
            </div>
        </div>
    </div>
);

export default Tags;
