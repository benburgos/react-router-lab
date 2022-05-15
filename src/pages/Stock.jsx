import { useParams } from 'react-router-dom';
import stocks from '../data/data';

export default function Stock() {
  const { symbol } = useParams();
  const stock = stocks[stocks.findIndex((object) => object.symbol === symbol)];

  return (
    <div className="card">
      <div className="card-header">
        <h1>{stock.name}</h1>
        <h1>{stock.symbol}</h1>
      </div>
      <div className="card-highlight">
        <h2>Price:</h2>
        <p>${stock.lastPrice}</p>
      </div>
      <div className="card-history">
        <div className="card-history-header">
          <h3>Historical Data</h3>
        </div>
        <div className="card-history-detail">
          <h4>
            Open Price: <span>${stock.open.toFixed(2)}</span>
          </h4>
          <h4>
            Change %:
            <span className={Math.sign(stock.change) === 1 ? 'green' : 'red'}>
              {stock.change.toFixed(2)}%
            </span>
          </h4>

          <h4>
            Highest Price: <span>${stock.high.toFixed(2)}</span>
          </h4>

          <h4>
            Lowest Price: <span>${stock.low.toFixed(2)}</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
