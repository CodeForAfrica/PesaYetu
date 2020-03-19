import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal';
import Navigation from 'components/Header/Navigation';
import Player from './Player';

function PlayerModal({ open, ...props }) {
  return (
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    <Modal isOpen={open} {...props}>
      <Navigation />
      <Player />
    </Modal>
  );
}

PlayerModal.propTypes = {
  open: PropTypes.bool.isRequired
};

export default PlayerModal;
