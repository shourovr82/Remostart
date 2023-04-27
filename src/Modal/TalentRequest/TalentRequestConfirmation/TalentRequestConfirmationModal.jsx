/* eslint-disable react/jsx-no-bind */
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { CgClose } from 'react-icons/cg';
import modalSvg1 from '../../../Assets/Dashboard/talentRequest/talentRequestModalSvg1.svg';
import modalSvg2 from '../../../Assets/Dashboard/talentRequest/talentRequestModalSvg2.svg';
import TalentConfirmationProcess from './TalentConfirmationProcess';

const TalentRequestConfirmationModal = ({ selectedTalent, setIsOpen, isOpen }) => {
  function closeModal() {
    setIsOpen(false);
  }
  console.log(selectedTalent);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className=" w-full lg:w-[90%] h-[85vh]  transform overflow-hidden rounded-2xl bg-[#f0f9ff] p-3 lg:p-6 text-left align-middle shadow-xl transition-all relative">
                {/* cross button for close modal */}
                <div className="absolute right-4 top-4">
                  <button
                    type="button"
                    className=" p-2 rounded-full duration-300 ease-in inline-flex  hover:text-white hover:bg-[#19a5ff] text-[#19a5ff]"
                    onClick={closeModal}
                  >
                    <CgClose className="text-2xl " />
                  </button>
                </div>
                {/* modal design */}
                <div className="absolute max-md:-z-30 right-0 flex  gap-4 top-20">
                  <img src={modalSvg1} alt="" />
                  <img src={modalSvg2} alt="" />
                </div>
                {/* modal content */}

                <TalentConfirmationProcess selectedTalent={selectedTalent} setIsOpen={setIsOpen} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TalentRequestConfirmationModal;
