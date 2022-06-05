import React from 'react'

const Transactions = () => {
  const transactions = [
    {
      symbol : 'NVDA',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    },
    {
      symbol : 'BLH',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    },
    {
      symbol : 'GRW',
      quantity : 3,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    },
    {
      symbol : 'GRA',
      quantity : 3,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    },
    {
      symbol : 'GRB',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    },
    {
      symbol : 'GRC',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    },
    {
      symbol : 'GRD',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    },
    {
      symbol : 'GRE',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    },
    {
      symbol : 'GRF',
      quantity : 2,
      price : 2.00,
      type: 'sell',
      date: '04/13/2009'
    },  
    {
      symbol : 'GRG',
      quantity : 2,
      price : 2.00,
      type: 'buy',
      date: '04/13/2009'
    }
  ]

  return (
    <div className='mt-5'>
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-4 gap-4">
      {transactions !== "" && transactions.map((transaction) => {
        const total = (transaction.price) * (transaction.quantity)
        return (
          <div className="bg-white space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-lg">
              <div className="text-gray-500">{transaction.date}</div>
              <div>
                {transaction.type == 'buy' ? 
                <span
                  className="p-1.5 text-base font-medium uppercase tracking-wider text-white bg-blue-900 rounded-lg bg-opacity-50">{transaction.type}
                </span>
                :
                <span
                  className="p-1.5 text-base font-medium uppercase tracking-wider text-black bg-red-500 rounded-lg bg-opacity-50">{transaction.type}
                </span>}
              </div>
            </div>
            <div className="text-lg text-gray-700">
              {transaction.symbol} | P{transaction.price} | {transaction.quantity}
            </div>
            <div className="text-xl font-medium text-black">
              P{total}
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Transactions