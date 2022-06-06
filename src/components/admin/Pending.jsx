import React from 'react'

const Pending = () => {
  const users = [
    {
      email : 'test1@gmail.com',
      approved: false,
      created_at: '04/13/2009'
    },
    {
      email : 'test2@gmail.com',
      approved: false,
      created_at: '04/13/2009'
    },
    {
      email : 'test3@gmail.com',
      approved: false,
      created_at: '04/13/2009'
    },
    {
      email : 'test4@gmail.com',
      approved: false,
      created_at: '04/13/2009'
    },
    {
      email : 'test5@gmail.com',
      approved: false,
      created_at: '04/13/2009'
    },
    {
      email : 'test6@gmail.com',
      approved: false,
      created_at: '04/13/2009'
    },
    {
      email :'test7@gmail.com',
      approved: false,
      created_at: '04/13/2009'
    },
    {
      email : 'test8@gmail.com',
      approved: false,
      created_at: '04/13/2009'
    },
    {
      email : 'test9@gmail.com',
      approved: false,
      created_at: '04/13/2009'
    },  
    {
      email : 'test10@gmail.com',
      approved: false,
      created_at: '04/13/2009'
    }
  ]

  return (
    <div className="p-10 h-screen bg-gray-100">

      <div className="overflow-auto rounded-lg shadow hidden md:block">
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="w-25 p-3 text-sm font-semibold tracking-wide text-left">User</th>
            <th className="w-30 p-3 text-sm font-semibold tracking-wide text-left">Created At</th>
            <th className="w-25 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
            <th className="w-10 p-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
        {users !== "" && users.map((user) => {
          return (
            <tr className="bg-white" key={user.email}>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            {user.email}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            {user.created_at}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            {!user.approved ? "PENDING" : " "}
            </td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
              <button className='border w-30 my-1 p-2 text-[15px] bg-teal-600 hover:bg-emerald-300 text-white'>Approve User</button>
            </td>
          </tr>
          )
        })}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Pending