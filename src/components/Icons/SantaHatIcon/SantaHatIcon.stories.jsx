import React from 'react';

import SantaHatIcon from './SantaHatIcon';

export default {
  component: SantaHatIcon,
  title: 'SantaHatIcon',
};

export const Default = () => (
  <>
    <div style={{ backgroundColor: 'gray', width: '200px' }}>
      <SantaHatIcon width={200} />
    </div>
  </>
);
