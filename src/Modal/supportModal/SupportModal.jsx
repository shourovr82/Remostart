import React from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineMail } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';

const SupportModal = () => {
  const { register, handleSubmit } = useForm();

  const submitToSupport = (data) => {};

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="supportModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  lg:max-w-2xl  supportBg">
          <div className="modal-action absolute lg:right-6 -top-3 right-2 lg:top-0">
            <label
              htmlFor="supportModal"
              className="hover:border-black  cursor-pointer border rounded-full p-1 duration-300 ease-in border-transparent"
            >
              <RxCross2 />
            </label>
          </div>

          <form onSubmit={handleSubmit(submitToSupport)} className="lg:pl-2 pt-2 pb-5">
            <h3 className="font-semibold text-lg">Get Support With Us!!</h3>
            {/* email  */}
            <div className="relative lg:w-1/2  py-2">
              <label htmlFor="UserEmail" className="sr-only">
                {' '}
                Email{' '}
              </label>

              <input
                {...register('email', { required: true })}
                type="email"
                id="UserEmail"
                placeholder="Your Email Id"
                className="w-full rounded-lg bg-transparent border border-[#BCBCBC] placeholder:text-sm placeholder:lg:text-base text-sm placeholder:text-[#7B7B7B] pl-10 py-3 outline-none px-2 shadow-sm sm:text-sm"
              />

              <span className="pointer-events-none absolute inset-y-0 left-0 grid w-10 place-content-center text-[#7B7B7B]">
                <HiOutlineMail />
              </span>
            </div>

            {/* text area */}
            <div className="form-control mt-5">
              <textarea
                {...register('about', { required: true })}
                className="textarea bg-transparent  focus:outline-none textarea-bordered h-24  placeholder:text-[#7B7B7B] placeholder:lg:text-base placeholder:text-sm resize-none"
                placeholder="What do want to know about or get support about! Please feel free to ask for anything even about my ex!"
              />
            </div>
            {/* submit button */}
            <div className="mt-5">
              <button
                type="submit"
                className="border rounded-md px-10 py-3 bg-[#0B132A] text-white text-sm  "
              >
                Get Support Now!
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SupportModal;
