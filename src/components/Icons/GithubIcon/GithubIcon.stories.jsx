import React from 'react';

import GithubIcon from './GithubIcon';

export default {
  component: GithubIcon,
  title: 'GithubIcon',
};

export const Default = () => (
  <>
    <div style={{ backgroundColor: 'gray', width: '200px' }}>
      <GithubIcon width={200} />
    </div>
  </>
);
