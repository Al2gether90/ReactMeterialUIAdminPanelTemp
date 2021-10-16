import React from 'react';

import Layout from "../../components/Layout";
import Orders from '../../mock/orders.json';
import OrdersTable from '../../components/OrdersTable';
import './style.scss';

const OrdersColumns = [
  {
    title: 'Image',
    key: 'productImage',
  },
  {
    title: 'Product Name',
    key: 'productName',
  },
  {
    title: 'Price',
    key: 'productPrice',
  },
  {
    title: 'Created At',
    key: 'createdAt',
  },
  {
    title: 'Status',
    key: 'status',
  },
];

const OrdersPage = () => (
  <Layout title="My Orders">
    <div className="orders-page">
      <OrdersTable
        columns={OrdersColumns}
        orders={Orders}
      />
    </div>
  </Layout>
);

export default OrdersPage;
