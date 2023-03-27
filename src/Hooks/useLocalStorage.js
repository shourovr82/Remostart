const getStoredJob = (key) => JSON.parse(localStorage.getItem(key)) || {};
const deleteLocalStorage = (key) => localStorage.removeItem(key);

const setJob = (key, jobDetails) => localStorage.setItem(key, JSON.stringify(jobDetails));
export { setJob, getStoredJob, deleteLocalStorage };

