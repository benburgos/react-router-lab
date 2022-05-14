import stocks from '../data/data'

export default function Dashboard() {
    return(
        <div className='dashboard-table'>
           <h2>Most Active Stocks</h2>
           <table>
               <tr>
                   <th>Company Name (Symbol)</th>
                   <th>Price</th>
                   <th>Change</th>
               </tr>
               <tr><td>test</td><td>test</td><td>test</td></tr>
               <tr><td>test</td><td>test</td><td>test</td></tr>
               <tr><td>test</td><td>test</td><td>test</td></tr>
            </table> 
        </div>
    )
}