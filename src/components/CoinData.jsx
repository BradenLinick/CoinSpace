import React from "react";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="coindata bg-dark mt-3 p-2 rounded border row">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-light coin-data-category">Market Cap</span>
              <span className="text-white">{data.market_cap}</span>
            </div>
            <hr className="coindata-hr" />
            <div className="d-flex flex-column">
              <span className="text-light coin-data-category">
                Total Supply
              </span>
              <span className="text-white">{data.total_supply}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-light coin-data-category">Volume(24H)</span>
              <span className="text-white">{data.total_volume}</span>
            </div>
            <hr className="coindata-hr" />
            <div className="d-flex flex-column">
              <span className="text-light coin-data-category">high 24h</span>
              <span className="text-white">{data.high_24h}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-light coin-data-category">
                Circulating Supply
              </span>
              <span className="text-white">{data.circulating_supply}</span>
            </div>
            <hr className="coindata-hr" />
            <div className="d-flex flex-column">
              <span className="text-light coin-data-category">low 24h</span>
              <span className="text-white">{data.low_24h}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;