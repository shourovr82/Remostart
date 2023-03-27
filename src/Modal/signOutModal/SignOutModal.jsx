import Cookies from 'js-cookie';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { GrClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import logoutModalPhoto from '../../Assets/Images/logoutModal.png';
import AuthContext from '../../Context/AuthContext';

const SignOutModal = () => {
    // logout functionality
    const navigate = useNavigate();
    const { serviceUser } = useContext(AuthContext);

    const handleLogout = () => {
        if (serviceUser?.email) {
            window.open(`${process.env.REACT_APP_URL_STARTUP}/auth/logout`, '_self');
        } else {
            Cookies.remove('token');
            Cookies.remove('userRole');
            toast.success('Logout Successfully');
            navigate('/');
        }
    };
    return (
        <div>
            <section>
                <input type="checkbox" id="logoutModal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-[350px] rounded-[10px] relative  flex justify-center">
                        <button type="button">
                            <label
                                htmlFor="logoutModal"
                                className="absolute duration-300 ease-in-out hover:border-[#333] rounded-full p-2 cursor-pointer  right-4 top-4 border border-transparent"
                            >
                                <GrClose className="text-lg" />
                            </label>
                        </button>

                        {/* sign out contents */}
                        <div className="flex py-5 flex-col items-center text-center justify-center">
                            <div className="space-y-3 flex flex-col items-center">
                                <img className="w-16 object-center" src={logoutModalPhoto} alt="" />
                                <h4 className="font-semibold">Sign Out</h4>
                                <p className="text-[#999999]  text-lg font-medium">
                                    Are you sure you would like to sign out of your Remostart
                                    account?
                                </p>
                            </div>

                            {/* Buttons of Sign Out and Cancel */}
                            <div className="flex  w-full px-3 flex-col mt-4 gap-2">
                                <button onClick={() => handleLogout()} type="button">
                                    <label
                                        htmlFor="logoutModal"
                                        className="btn btn-outline btn-sm pt-1 pb-8 rounded-md border border-[#E5E5E5] w-full hover:bg-white hover:text-black normal-case font-semibold text-lg "
                                    >
                                        Sign out
                                    </label>
                                </button>
                                <label
                                    htmlFor="logoutModal"
                                    className="text-lg rounded-md cursor-pointer bg-[#0b132a] font-semibold text-white
               px-14 py-1.5 
              "
                                >
                                    Cancel
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignOutModal;
