import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router";

import Layout from "../../components/Layout";
import Products from '../../mock/products.json';
import ProductsTable from "../../components/ProductsTable";

import './style.scss';

const productTableColumns = [
  {
    title: 'Image',
    key: 'image'
  },
  {
    title: 'Product Name',
    key: 'name'
  },
  {
    title: 'Price',
    key: 'price'
  },
  {
    title: 'Purchased At',
    key: 'purchasedAt'
  }
];

function ProductsPage() {
  const history = useHistory();

  const showDetail = (id) => {
    history.push(`/products/${id}`);
  };

  return (
    <Layout title="My Products">
      <div className="products-page">
        <ProductsTable
          columns={productTableColumns}
          products={Products}
          onRowClick={showDetail}
        />
      </div>
    </Layout>
  );
}

ProductsPage.propTypes = {
};

ProductsPage.defaultProps = {
};

const mapStateToProps = (store) => ({
});

export default connect(mapStateToProps)(ProductsPage);
