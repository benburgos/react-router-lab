import stocks from '../data/data';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="dashboard-table">
      <h2>Most Active Stocks</h2>
      <table>
        <tr>
          <th>Company Name (Symbol)</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
        {stocks.map((stock, index) => {
          const { name, symbol, lastPrice, change, open } = stock;
          return (
            <tr key={index}>
              <td>
                <Link to={`/stocks/${symbol}`}>{`${name} (${symbol})`}</Link>
              </td>

              <td>{lastPrice}</td>
              <td className={Math.sign(change) === -1 ? 'red' : 'green'}>
                {`
                ${Math.sign(change) === 1 ? '+' : '-'} 
                ${Math.abs(open - lastPrice).toFixed(2)} (${change.toFixed(2)}%)
                `}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
