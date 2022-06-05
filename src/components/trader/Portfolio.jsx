import React from 'react'

const Portfolio = () => {
  const stocks = [
    {
      symbol : 'NVDA',
      company_name : 'HEHE',
      price : 2.00,
    },
    {
      symbol : 'BLH',
      company_name : 'HEHE',
      price : 2.00,
    },
    {
      symbol : 'GRW',
      company_name : 'HEHE',
      price : 2.00,
    },
    {
      symbol : 'GRA',
      company_name : 'HEHE',
      price : 2.00,
    },
    {
      symbol : 'GRB',
      company_name : 'HEHE',
      price : 2.00,
    },
    {
      symbol : 'GRC',
      company_name : 'HEHE',
      price : 2.00,
    },
    {
      symbol : 'GRD',
      company_name : 'HEHE',
      price : 2.00,
    },
    {
      symbol : 'GRE',
      company_name : 'HEHE',
      price : 2.00,
    },
    {
      symbol : 'GRF',
      company_name : 'HEHE',
      price : 2.00,
    },  
    {
      symbol : 'GRG',
      company_name : 'HEHE',
      price : 2.00,
    }
  ]

  return (
    <div className="p-5 h-screen bg-gray-100">

      <div className="overflow-auto rounded-lg shadow hidden md:block">
      <table class="w-full">
        <thead class="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th class="w-60 p-3 text-sm font-semibold tracking-wide text-left">Stock</th>
            <th class="w-60 p-3 text-sm font-semibold tracking-wide text-left">Company Name</th>
            <th class="w-60 p-3 text-sm font-semibold tracking-wide text-left">Shares</th>
            <th class="w-60 p-3 text-sm font-semibold tracking-wide text-left">Total</th>
            <th class="w-10 p-3"></th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
        {stocks !== "" && stocks.map((stock) => {
          return (
            <tr class="bg-white" key={stock.symbol}>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            {stock.symbol}</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            {stock.company_name}</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            {stock.price}</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            {stock.price}</td>  
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <button className='border w-20 my-1 py-1 bg-green-600 hover:bg-emerald-300 text-white'>Sell Stock</button></td>
          </tr>
          )
        })}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Portfolio