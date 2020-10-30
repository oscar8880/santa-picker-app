import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ParticipantContext = React.createContext([]);

export const ParticipantProvider = ({ children }) => {
  const [participantsData, setParticipantsData] = useState({
    contacts: [],
    organiserName: '',
    spendingLimit: 'null',
  });

  const participantContext = {
    participantsData: participantsData,
    setParticipantsData: (participantsData) => {
      setParticipantsData({
        ...participantsData,
      });
    },
  };

  return (
    <ParticipantContext.Provider value={participantContext}>
      {children}
    </ParticipantContext.Provider>
  );
};

ParticipantProvider.propTypes = {
  children: PropTypes.node,
};
