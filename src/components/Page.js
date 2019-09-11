import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Partners from './Partners';

function Page({ children }) {
  return (
    <div>
      {children}
      <Partners />
      <Footer />
    </div>
  );
}
Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Page;
