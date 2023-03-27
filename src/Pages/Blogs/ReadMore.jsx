import React, { useState } from 'react';

const ReadMore = ({ text }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <p className="">
            {isReadMore ? text.slice(0, 150) : text}
         
            {text.length > 150 && (
                <button type="button" className="underline" onClick={toggleReadMore}>
                    {isReadMore ? '...read more' : ' ...show less'}
                </button>
            )}
        </p>
    );
};

export default ReadMore;
