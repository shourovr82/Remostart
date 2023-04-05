/* eslint-disable consistent-return */
import React from 'react';

import SettingsItems from '../../../Routes/Roots/SettingsItems';

import GeneralSettingsPersonal from './SettingsGeneral/GeneralSettingsPersonal';
import GeneralSettingsVerification from './SettingsGeneral/GeneralSettingsVerification';
import GeneralSettingsPassword from './SettingsGeneral/Password';

const SettingsGeneral = () => (
  <SettingsItems>
    <GeneralSettingsPersonal />

    <GeneralSettingsPassword />

    <GeneralSettingsVerification />
  </SettingsItems>
);

export default SettingsGeneral;
