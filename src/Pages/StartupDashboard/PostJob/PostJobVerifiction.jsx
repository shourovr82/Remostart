import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import img from '../../../Assets/Dashboard/post_job/postVerifiction.png';

const PostJobVerifiction = () => {
    return (
        <section className='grid place-items-center mt-20 w-full h-screen'>
            <div className='text-center'>
                <img src={img} alt="" />
                <div>
                    <Fragment className='text-center'>
                        Oops! Looks like your profile is not complete. <br />
                        Please submit your <Link className='text-blue-500'>verification of starup</Link>  to continue !
                    </Fragment>
                </div>
            </div>
        </section>
    )
}

export default PostJobVerifiction