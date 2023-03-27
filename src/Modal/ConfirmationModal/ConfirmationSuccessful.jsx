import React from 'react';

import { BsFillLightningChargeFill } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';

const ConfirmationSuccessful = () => (
    <div>
        <input type="checkbox" id="ConfirmationSuccessful" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label
                    htmlFor="ConfirmationSuccessful"
                    className=" absolute right-4 top-4 hover:border cursor-pointer p-2 rounded-full "
                >
                    <span>
                        <RxCross1 />
                    </span>
                </label>
                <div className="text-center flex p-10 justify-center">
                    <div>
                        <p className="borde flex justify-center">
                            <span className="border-4 border-[#F0FDFA] p-2 bg-[#CCFBF1] rounded-full">
                                <BsFillLightningChargeFill className="text-3xl text-[#14B8A6] " />
                            </span>
                        </p>
                        <h1 className="text-xl font-bold">Post Successfull!</h1>
                        <div className="text-center">
                            <p className="font-medium text-[#6B7280]">
                                You can see the applications of your applicants in your{' '}
                                <span className="text-[#3B82F6]">Dashboard.</span> You will be
                                notified of when there is an update.
                            </p>
                        </div>
                        <div className="mt-5">
                            <label
                                htmlFor="ConfirmationSuccessful"
                                className="font-semibold text-[15px] border py-[10px] px-3 rounded-md cursor-pointer "
                            >
                                Back To Post
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ConfirmationSuccessful;
