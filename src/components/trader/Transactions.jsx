import React from 'react'

const Transactions = () => {
  const transactions = [
    {
      symbol : 'NVDA',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009',
      total: 4.00
    },
    {
      symbol : 'BLH',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009',
      total: 4.00
    },
    {
      symbol : 'GRW',
      quantity : 3,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009',
      total: 4.00
    },
    {
      symbol : 'GRA',
      quantity : 3,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009',
      total: 4.00
    },
    {
      symbol : 'GRB',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009',
      total: 4.00
    },
    {
      symbol : 'GRC',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009',
      total: 4.00
    },
    {
      symbol : 'GRD',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009',
      total: 4.00
    },
    {
      symbol : 'GRE',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009',
      total: 4.00
    },
    {
      symbol : 'GRF',
      quantity : 2,
      price : 2.00,
      type: 'sell',
      date: '04/13/2009',
      total: 4.00
    },  
    {
      symbol : 'GRG',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009',
      total: 4.00
    }
  ]

  return (
    <div className='p-10'>
      <div className="p-5 h-screen bg-gray-100">

      <div className="overflow-auto rounded-lg shadow hidden md:block">
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
          <th className="w-60 p-3 text-sm font-semibold tracking-wide text-left">Date</th>
            <th className="w-90 p-3 text-sm font-semibold tracking-wide text-left">Stock</th>
            <th className="w-90 p-3 text-sm font-semibold tracking-wide text-left">Quantity</th>
            <th className="w-90 p-3 text-sm font-semibold tracking-wide text-left">Price</th>
            <th className="w-90 p-3 text-sm font-semibold tracking-wide text-left">Total</th>
            <th className="w-50 p-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
        {transactions !== "" && transactions.map((transaction) => {
          return (  
            <tr className="bg-white" key={transaction.symbol}>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            {transaction.date}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            {transaction.symbol}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            {transaction.quantity}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            ₱{transaction.price}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            ₱{transaction.total}</td>   
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            {transaction.type === 'buy' ?
            <p className="p-3 text-xs font-medium uppercase tracking-wider text-center text-black bg-blue-700 rounded-md bg-opacity-50">BOUGHT</p>
            :
            <p className="p-3 text-xs font-medium uppercase tracking-wider text-center text-black bg-yellow-600 rounded-md bg-opacity-50">SOLD</p>}
            </td>
            
          </tr>
          )
        })}
        </tbody>
      </table>
      </div>
      </div>
    </div>
  )
}

export default Transactions