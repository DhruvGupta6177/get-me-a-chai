import React from 'react'



const Username = ({ params }) => {
  return (
    <>

      <div className='cover w-full relative bg-red-50'>
        <img className='object-cover w-full h-[350]' src='https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/16.gif?token-time=1728000000&token-hash=2JDsRiQIRhUgJxbomN3uixuEAROyoQnBZ4OFG6CQJEY%3D' alt='' />
        <div className='absolute -bottom-16 right-[45%] border-2 border-white rounded-full'>
          <img className='rounded-full' width={150} height={150} src='https://techcrunch.com/wp-content/uploads/2023/10/patreon-new-logo.jpg' alt='' />
        </div>
      </div>
      <div className='info flex justify-center flex-col my-24 gap-2 items-center'>
        <div className='font-bold text-lg text-white'>
          @{params.username}
        </div>
        <div className='text-slate-400'>
          Creating Animated art For VTT's
        </div>
        <div className='text-slate-400'>
          14,064 members . 89 posts . $17,810/release
        </div>
        <div className='payment w-[80%] flex gap-3 mt-11'>
          <div className='supporters w-1/2 bg-slate-900 rounded-lg text-white p-10'>
            <h2 className='text-2xl font-bold my-5'>Supporters</h2>
            <ul className='mx-5 text-lg'>

              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src='/avatar.png' alt='' />
                <span>
                  Shubham Donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"
                </span>
              </li>

              <li className='my-4 flex gap-2 items-center'>
                <img width={33} height={33} src="/avatar.png" alt='user avatar' />
                <span>
                  Shubham Donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"
                </span>
              </li>

              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src='/avatar.png' alt='' />
                <span>
                  Shubham Donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"
                </span>
              </li>

            </ul>

          </div>
          <div className='makepayment w-1/2 bg-slate-900 rounded-lg text-white p-10'>
            <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
            <div className='flex gap-2 flex-col'>
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
              {/* <button className='bg-slate-800 p-3 rounded-lg hover:bg-slate-900'>Pay</button> */}
              <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>

            </div>
            <div className='flex gap-2 mt-5'>
              <button className='bg-slate-800 w-1/5 p-3 rounded-lg hover:bg-slate-900'>Pay $10</button>
              <button className='bg-slate-800 w-1/5 p-3 rounded-lg hover:bg-slate-900'>Pay $50</button>
              <button className='bg-slate-800 w-1/5 p-3 rounded-lg hover:bg-slate-900'>Pay $100</button>
              <button className='bg-slate-800 w-1/5 p-3 rounded-lg hover:bg-slate-900'>Pay $500</button>
              <button className='bg-slate-800 w-1/5 p-3 rounded-lg hover:bg-slate-900'>Pay $1000</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username
