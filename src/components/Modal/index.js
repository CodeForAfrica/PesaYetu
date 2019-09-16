import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Modal as MaterialModal } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
    padding: 0,
    backgroundColor: 'white'
  },
  modal: {
    outline: 'none',
    height: 'auto',
    width: '100vw'
  }
};

function Modal({ classes, children, isOpen, onEscapeKeyDown }) {
  return (
    <MaterialModal
      hideBackdrop
      open={isOpen}
      className={classes.root}
      onEscapeKeyDown={onEscapeKeyDown}
    >
      <div className={classes.modal}>{children}</div>
    </MaterialModal>
  );
}

Modal.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onEscapeKeyDown: PropTypes.func
};

Modal.defaultProps = {
  onEscapeKeyDown: () => {}
};

export default withStyles(styles)(Modal);
