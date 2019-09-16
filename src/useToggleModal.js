import { useContext } from 'react';
import { __RouterContext } from 'react-router';
import { AppContext } from './AppContext';

export default modalName => {
  const {
    state: { openModal },
    dispatch
  } = useContext(AppContext);
  const { history } = useContext(__RouterContext);
  return {
    open: modalName === openModal,
    toggleModal: () => {
      if (openModal && openModal === modalName) {
        history.goBack();
      } else if (!openModal) {
        history.push(`#`);
      } else {
        //
      }
      dispatch({
        type: 'modal',
        openModal: openModal === modalName ? null : modalName
      });
    }
  };
};
