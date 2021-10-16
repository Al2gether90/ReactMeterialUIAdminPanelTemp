import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import { Person } from "@material-ui/icons";

import Products from "../../mock/products.json";
import Layout from "../../components/Layout";

import "./style.scss";
import Spinner from "../../components/Common/Spinner";

const ProductDetailPage = () => {
  const history = useHistory();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const productId = history.location.pathname.split('/products/')[1];
    setData(Products.find((product) => product.id.toString() === productId));
  }, [history.location.pathname]);

  const purchaseProduct = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      history.push('/orders');
    }, 5000);
  };

  return (
    <Layout title="Product">
      {data &&
      <div className="product-detail-page">
        <div className="main-info">
          <div className="product-image">
            <img src={`/images/products/${data.image}`} alt=""/>
          </div>

          <div className="product-name">
            <p>{data.name}</p>
            <p><strong>Price: </strong>{data.price} MTO</p>
          </div>
        </div>

        <div className="info">
          <p className="label">Description:</p>
          <p>{data.description}</p>
        </div>

        <div className="info">
          <p className="label">Location:</p>
          <p>{data.merchant.location}</p>
        </div>

        <div className="info">
          <p className="label">Merchant Info:</p>
          <div className="merchant-info">
            <Person/>
            <a className="merchant-name">
              {data.merchant.name}
            </a>
          </div>
        </div>

        <div className="actions">
          <Button
            color="primary"
            variant="contained"
            onClick={purchaseProduct}
          >
            Purchase
          </Button>
        </div>

        {isLoading &&
        <div className="overlay">
          <Spinner/>
        </div>
        }
      </div>
      }
    </Layout>
  );
};

export default ProductDetailPage;
