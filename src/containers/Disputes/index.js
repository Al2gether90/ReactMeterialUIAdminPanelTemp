import React from 'react';
import { useHistory } from "react-router";

import Layout from "../../components/Layout";
import Disputes from '../../mock/disputes.json';
import DisputesTable from '../../components/DisputesTable';
import './style.scss';

const DisputesColumns = [
  {
    title: 'Image',
    key: 'product.image',
  },
  {
    title: 'Product Name',
    key: 'product.name',
  },
  {
    title: 'Price',
    key: 'product.price',
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

const DisputesPage = () => {
  const history = useHistory();

  const showDetail = (id) => {
    history.push(`/disputes/${id}`);
  };

  return (
    <Layout title="Dispute">
      <div className="disputes-page">
        <DisputesTable
          columns={DisputesColumns}
          disputes={Disputes}
          onRowClick={showDetail}
        />
      </div>
    </Layout>
  );
};

export default DisputesPage;
