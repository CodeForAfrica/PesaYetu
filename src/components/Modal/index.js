import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Modal as MaterialModal } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 0,
    backgroundColor: theme.palette.primary.dark
  },
  modal: {
    outline: 'none',
    height: 'auto',
    width: '100vw'
  }
}));

function Modal({ children, isOpen, onEscapeKeyDown, ...props }) {
  const classes = useStyles(props);

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

export default Modal;
