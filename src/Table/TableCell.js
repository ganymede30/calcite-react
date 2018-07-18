import PropTypes from 'prop-types';
import React from 'react';
import { StyledTableCell } from './Table-styled';

const TableCell = ({
  children,
  blue,
  striped,
  plain,
  noTable,
  justified,
  noCol,
  noRow,
  ...other
}) => {
  const tableCell = (
    <StyledTableCell
      blue={blue}
      striped={striped}
      plain={plain}
      noTable={noTable}
      justified={justified}
      noCol={noCol}
      noRow={noRow}
      {...other}
    >
      {children}
    </StyledTableCell>
  );

  return tableCell;
};

TableCell.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  blue: PropTypes.bool,
  /** Description TBD */
  striped: PropTypes.bool,
  /** Description TBD */
  plain: PropTypes.bool,
  /** Description TBD */
  noTable: PropTypes.bool,
  /** Description TBD */
  justified: PropTypes.bool,
  /** Description TBD */
  noCol: PropTypes.bool,
  /** Description TBD */
  noRow: PropTypes.bool
};

TableCell.defaultProps = {};

export default TableCell;
