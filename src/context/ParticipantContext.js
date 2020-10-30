import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ParticipantContext = React.createContext([]);

export const ParticipantProvider = ({ children }) => {
  const [participantsData, setParticipantsData] = useState({
    contacts: [
      {
        assignedContact: { name: 'Oscar Zealley', email: 'oscar2@zealley.com' },
        contact: { name: 'Oscar-Hyphen', email: 'oscar1@zealley.com' },
      },
      {
        assignedContact: { name: 'Oscar-Hyphen', email: 'oscar1@zealley.com' },
        contact: { name: 'Chris', email: 'oscar3@zealley.com' },
      },
      {
        assignedContact: { name: 'Chris', email: 'oscar3@zealley.com' },
        contact: { name: 'Oscar Zealley', email: 'oscar2@zealley.com' },
      },
    ],
    organiserName: 'John',
    spendingLimit: null,
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
