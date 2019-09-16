import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

import Modal from '../Modal';
import Navigation from '../Header/Navigation';

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
