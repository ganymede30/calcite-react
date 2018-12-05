import PropTypes from 'prop-types';
import React from 'react';

import { StyledSideNavTitle } from './SideNav-styled';

const SideNavTitle = ({ children, ...other }) => {
  return <StyledSideNavTitle {...other}>{children}</StyledSideNavTitle>;
};

SideNavTitle.propTypes = {
  /** The content of the component */
  children: PropTypes.node
};

SideNavTitle.defaultProps = {};

SideNavTitle.displayName = 'SideNavTitle';

export default SideNavTitle;
