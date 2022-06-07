import { useState } from 'react'
import Create from './Create'

const Traders = () => {
  const [creating, setCreating] = useState(false)
  const handleClick = () => setCreating(!creating)
  const users = [
    {
      id: 1,
      email : 'test1@gmail.com',
      balance: 1000,
      created_at: '04/13/2009'
    },
    {
      id: 1,
      email : 'test2@gmail.com',
      balance: 1000,
      created_at: '04/13/2009'
    },
    {
      id: 1,
      email : 'test3@gmail.com',
      balance: 1000,
      created_at: '04/13/2009'
    },
    {
      id: 1,
      email : 'test4@gmail.com',
      balance: 1000,
      created_at: '04/13/2009'
    },
    {
      id: 1,
      email : 'test5@gmail.com',
      balance: 1000,
      created_at: '04/13/2009'
    },
    {
      id: 1,
      email : 'test6@gmail.com',
      balance: 1000,
      created_at: '04/13/2009'
    },
    {
      id: 1,
      email :'test7@gmail.com',
      balance: 1000,
      created_at: '04/13/2009'
    },
    {
      id: 1,
      email : 'test8@gmail.com',
      balance: 1000,
      created_at: '04/13/2009'
    },
    {
      id: 1,
      email : 'test9@gmail.com',
      balance: 1000,
      created_at: '04/13/2009'
    },  
    {
      id: 1,
      email : 'test10@gmail.com',
      balance: 1000,
      created_at: '04/13/2009'
    }
  ]

  return (
    <div className="p-10 h-screen bg-gray-100">

      <div className="overflow-auto rounded-lg shadow hidden md:block">
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="w-25 p-3 text-sm font-semibold tracking-wide text-center">ID</th>
            <th className="w-25 p-3 text-sm font-semibold tracking-wide text-center">Email</th>
            <th className="w-25 p-3 text-sm font-semibold tracking-wide text-left">Created At</th>
            <th className="w-25 p-3 text-sm font-semibold tracking-wide text-center">Balance</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
        {users !== "" && users.map((user) => {
          return (
            <tr className="bg-white" key={user.email}>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-center">
            {user.id}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-center">
            {user.email}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{user.created_at}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-center">₱{user.balance}</td>
          </tr>
          )
        })}
        </tbody>
      </table>
      </div>
      <div className="w-full flex justify-end">
        <button onClick={handleClick} className='p-2.5 mt-5 mr-2 bg-yellow-500 hover:bg-yellow-300 border-black text-black relative hover:text-black'>Create Trader</button>
      </div>
      {creating && <Create setCreating={setCreating} />}
    </div>
  )
}

export default Traders