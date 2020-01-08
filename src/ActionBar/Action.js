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

import { StyledAction, TooltipWrapperStyles } from './ActionBar-styled';

import Tooltip from '../Tooltip';

import { ActionBarContext } from './ActionBar';

const Action = ({ children, icon, ...other }) => {
  const getAction = ({ action, collapsed }) => {
    if (!collapsed) {
      return action;
    }

    return (
      <Tooltip
        title={children}
        placement="right"
        targetWrapperStyle={TooltipWrapperStyles}
      >
        {action}
      </Tooltip>
    );
  };

  const getIcon = icon => {
    return React.cloneElement(icon, {
      size: 16
    });
  };

  return (
    <ActionBarContext.Consumer>
      {({ actionBarContext }) => {
        return getAction({
          action: (
            <StyledAction
              dark={actionBarContext.dark}
              collapsed={actionBarContext.collapsed}
              icon={getIcon(icon)}
              {...other}
            >
              {!actionBarContext.collapsed && children}
            </StyledAction>
          ),
          collapsed: actionBarContext.collapsed
        });
      }}
    </ActionBarContext.Consumer>
  );
};

Action.propTypes = {
  /** The content of the component */
  children: PropTypes.node,
  /** Sets the action as the selected item in the ActionBar */
  active: PropTypes.bool
};

Action.defaultProps = {};

Action.displayName = 'Action';

export default Action;