import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';

import './style.scss';


const OrdersTable = ({ orders, columns }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [keyword, setKeyword] = useState('');
  const [rows, setRows] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    setRows(orders.filter((order) => order.productName.toLowerCase().indexOf(keyword.toLowerCase()) > -1
      || order.productPrice.toString().indexOf(keyword.toLowerCase()) > -1
      || order.status.toLowerCase().indexOf(keyword.toLowerCase()) > -1));
    setPage(0);
  }, [orders, keyword]);

  return (
    <Paper>
      <TableContainer className="orders-table">
        <div className="table-header">
          <div className="search-input">
            <Search />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="search..."
            />
          </div>
          <p className="Total-cnt">
            Total My Orders:
            <strong>{orders.length}</strong>
          </p>
        </div>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={index}>
                  {column.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={order.id}>
                {columns.map((column, index) => {
                  const value = order[column.key];
                  return (
                    <TableCell className="table-cell" key={index}>
                      {
                        column.key === 'productImage'
                          ? <img src={`images/products/${value}`} alt="" />
                          : <span>{value}</span>
                      }
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

OrdersTable.propTypes = {
  orders: PropTypes.array,
  columns: PropTypes.array,
};

OrdersTable.defaultProps = {
  orders: [],
  columns: [],
};

export default OrdersTable;
