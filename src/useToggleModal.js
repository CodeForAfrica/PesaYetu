import { useContext } from 'react';
import { AppContext } from './AppContext';

export default modalName => {
  const {
    state: { openModal },
    dispatch
  } = useContext(AppContext);
  return {
    open: modalName === openModal,
    toggleModal: () => {
      dispatch({
        type: 'modal',
        openModal: openModal === modalName ? null : modalName
      });
    }
  };
};
