export const getFileSize = (fileSizeInByte) => {
    const fileSizeInKb = Math.floor(fileSizeInByte / 1024);
    return fileSizeInKb;
};
