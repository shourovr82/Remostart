import React from 'react';
import ConfirmationSuccessful from '../Modal/ConfirmationModal/ConfirmationSuccessful';

const UseModal = (showModal) => <div>{showModal && <ConfirmationSuccessful />}</div>;

export default UseModal;
