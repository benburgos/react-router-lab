import stocks from '../data/data';

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
        {stocks.map(({ name, symbol, lastPrice, change, open }) => {
          return (
            <tr key={symbol}>
              <td>{`${name} (${symbol})`}</td>
              <td>{lastPrice}</td>
              <td className={Math.sign(change) === -1 ? 'change-red':'change-green'}>
                {`${(lastPrice - open).toFixed(2)} (${change.toFixed(2)}%)`}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
