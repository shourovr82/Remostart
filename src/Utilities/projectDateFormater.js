// get Date March 2023 format
export const convertProjectDate = (date) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const formattedDate = `${month} ${year}`;
    return formattedDate;
};

// get duration for projects
export const getProjectDuration = (startingDate, endingDate) => {
    let durationString;
    if (startingDate && endingDate) {
        const diffInMs = Math.abs(new Date(endingDate) - new Date(startingDate));
        const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
        const diffInMonths = (diffInYears - Math.floor(diffInYears)) * 12;
        if (diffInYears < 1) {
            durationString = `${Math.ceil(diffInMonths)} months`;
            return durationString;
        }
        if (diffInYears >= 1) {
            durationString = `${Math.floor(diffInYears)} year ${Math.ceil(diffInMonths)} months`;
            return durationString;
        }
    }
    return '';
};
