import React, { useState } from 'react';

import { toast } from 'react-hot-toast';
import { RxCross2 } from 'react-icons/rx';

const TalentProcessProficiency = ({ selectedProficiency, setSelectedProficiency }) => {
    const [proficiencyValue, setProficiencyValue] = useState('');
    const [disableOption, setDisable] = useState(false);

    const handleChange = (e) => {
        const selectedOptions = e.target.selectedOptions[0].innerHTML;
        const arr = selectedProficiency?.filter((ar) => selectedOptions === ar);
        if (arr?.length) {
            toast.error(`Already added ${selectedOptions} !!`);
        } else if (!arr.length) {
            setProficiencyValue(e.target.value);
            setSelectedProficiency([...selectedProficiency, selectedOptions]);
        }
    };

    const handleClick = () => {
        setDisable(true);
    };

    const proficiencyLists = ['Sovineer', 'Intermediate', 'Advance', 'Professional'];

    return (
        <div className="ml-20">
            <div>
                <h1 className="font-bold text-3xl">Proficiency </h1>
                <p
                    className="mt-5 cl
                    text-lg"
                >
                    Please Select the level of Proficiency you want to have in your talents !
                </p>
            </div>
            {/* select option */}
            <div className="mt-10">
                <div>
                    <div className="lg:flex  gap-10  justify-center ">
                        <div className="group border-2  rounded-md px-3 py-2 inline-block border-dashed border-[#0ea5e9] lg:pr-10">
                            <select
                                onChange={handleChange}
                                className="select lg:w-[250px] focus:ring-0 border-[#e5e7eb]  mt-1 w-full font-semibold border 
                                              rounded-md "
                            >
                                <option value="" hidden>
                                    {proficiencyValue || 'Choose'}
                                </option>
                                {proficiencyLists?.map((item) => (
                                    <option
                                        onClick={handleClick}
                                        disabled={disableOption}
                                        value={item}
                                        key={Math.random()}
                                    >
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {selectedProficiency?.length ? (
                            <div className="flex flex-wrap border-dashed rounded-md border-[#0ea5e9] px-2 py-4 gap-3 lg:w-[630px] w-full border-2 h-auto bg-[#F0F9FF]">
                                {selectedProficiency?.map((value) => (
                                    <div key={Math.random()}>
                                        <div className="bg-[#19A5FF] py-1 px-2 text-white  text-sm text-center rounded-2xl flex gap-2 items-center justify-center  ">
                                            <p>{value}</p>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setSelectedProficiency(
                                                        selectedProficiency.filter(
                                                            (val) => val !== value
                                                        )
                                                    );
                                                }}
                                            >
                                                <RxCross2 className="font-bold text-sm" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex justify-center px-2 py-4 gap-3  lg:w-[630px] w-full border-2 rounded-md border-[#0ea5e9] border-dashed h-auto bg-[#F0F9FF]">
                                <div className="font-semibold ">No Proficiency added yet...</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TalentProcessProficiency;
