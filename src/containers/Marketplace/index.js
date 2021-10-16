import React from 'react';
import { connect } from 'react-redux';

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
    title: 'Sold out',
    key: 'soldOut'
  }
];

function Marketplace() {

  return (
    <Layout title="Marketplace">
      <div className="marketplace-page">
        <ProductsTable
          columns={productTableColumns}
          products={Products}
        />
      </div>
    </Layout>
  );
}

Marketplace.propTypes = {
};

Marketplace.defaultProps = {
};

const mapStateToProps = (store) => ({
});

export default connect(mapStateToProps)(Marketplace);
