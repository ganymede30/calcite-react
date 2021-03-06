// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

import PropTypes from 'prop-types';
import React from 'react';

import { StyledTopNavLink } from './TopNav-styled';

const TopNavLink = ({ children, href, ...other }) => {
  return (
    <StyledTopNavLink href={href} as={href ? 'a' : 'span'} {...other}>
      {children}
    </StyledTopNavLink>
  );
};

TopNavLink.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,
  /** The HTML href property of the link. If this property is missing, the component will render as a span. */
  href: PropTypes.string
};

TopNavLink.defaultProps = {};

TopNavLink.displayName = 'TopNavLink';

export default TopNavLink;
