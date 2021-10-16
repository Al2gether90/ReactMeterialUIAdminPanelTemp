import React, {useEffect, useState} from "react";
import { Button } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { useHistory } from "react-router";

import Layout from "../../components/Layout";
import Disputes from "../../mock/disputes.json"
import Spinner from "../../components/Common/Spinner";
import ConfirmDialog from "../../components/Common/ComfirmDialog";
import "./style.scss";

const DisputeDetailPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const [isOpenConfirmDialog, setIsOpenConfirmDialog] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const disputeId = history.location.pathname.split('/disputes/')[1];
    setData(Disputes.find((dispute) => dispute.id.toString() === disputeId));
  }, [history.location.pathname]);

  const cancelDispute = () => {
    setIsLoading(true);
    setIsOpenConfirmDialog(false);
    setTimeout(() => {
      setIsLoading(false);
      history.push('/disputes');
    }, 5000);
  };

  const disputeWithDraw = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      history.push('/marketplace');
    }, 5000);
  };

  return (
    <Layout title="Dispute">
      {data &&
      <div className="dispute-detail-page">
        <div className="status">
          <div className={`status-btn ${data.status.toLowerCase()}`}>
            {data.status}
          </div>
        </div>

        <div className="main-info">
          <div className="product-image">
            <img src={`/images/products/${data.product.image}`} alt=""/>
          </div>

          <div className="product-name">
            <p>{data.product.name}</p>
            <p><strong>Price: </strong>{data.product.price} MTO</p>
          </div>

          <div className="info">
            <p className="label">Dispute Created At:</p>
            <p>{data.createdAt}</p>
          </div>

          <div className="info">
            <p className="label">Purchased At</p>
            <p>{data.purchasedAt}</p>
          </div>
        </div>

        <div className="info">
          <p className="label">Dispute Description</p>
          <p>{data.description}</p>
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

        <div className="info align-items-start">
          <div className="info-block">
            <div className="info-item">
              <span>Delivery period:</span>
              <span>{data.deliveryPeriod}</span>
            </div>

            <div className="info-item">
              <span>Escrow period:</span>
              <span>{data.escrowPeriod}</span>
            </div>
          </div>

          <div className="info-block">
            <div className="info-item">
              <span>Agents in Review:</span>
              <span>{data.agentsInReview}</span>
            </div>

            <div className="info-item">
              <span>Agents in Approved:</span>
              <span>{data.agentsInApproved}</span>
            </div>

            <div className="info-item">
              <span>Agents in Review:</span>
              <span>{data.agentsInDisapproved}</span>
            </div>
          </div>
        </div>

        {data.status === 'Fail' &&
        <p className="help-text">
          <i>Sorry, your dispute has been disapproved by 2 agents, so you got failed for this case.</i>
        </p>
        }

        {data.status === 'Win' &&
        <p className="help-text">
          <i>Congrats! You have won a dispute.
            <br/>Please withdraw the deposited funds from an escrow contract.</i>
        </p>
        }

        <div className="actions">
          {data.status === 'Init' &&
          <Button
            color="primary"
            variant="contained"
            onClick={() => setIsOpenConfirmDialog(true)}
          >
            Cancel
          </Button>
          }

          {data.status === 'Win' &&
          <Button
            color="primary"
            variant="contained"
            onClick={disputeWithDraw}
          >
            Withdraw
          </Button>
          }
        </div>

        {isLoading &&
        <div className="overlay">
          <Spinner/>
        </div>
        }
      </div>
      }

      <ConfirmDialog
        open={isOpenConfirmDialog}
        handler={cancelDispute}
        content={
          "Are you sure to cancel this dispute?"
        }
        onClose={() => setIsOpenConfirmDialog(false)}
      />
    </Layout>
  );
};

export default DisputeDetailPage;
