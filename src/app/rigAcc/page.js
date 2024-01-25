import React from 'react'

const page = () => {
  return (
    <main className='flex justify-center min-h-[100vh]  bg-gradient-to-r from-indigo-900 via-indigo-700 to-cyan-400 '>
      <div className='border border-solid border-gray-500  w-[450px] h-[100%] rounded-lg p-[30px] shadow-lg bg-white  mt-6'>
        <div>  <img src='/image.svg  ' className='w-[100px]'></img></div>
        <div>
          <h1 className='text-xl font-bold mt-[1.8rem] '>Create a shopify Account</h1>
          <h3 className='text-[#616161] mb-3'>one Last step before starting your free trial.</h3>
        </div>
        <div>
          {/* <h1>Email</h1> */}
          <label for="userMail">Email</label>
          <input type='text' id='userMail' className='border border-solid  border-black w-[100%] rounded p-2 font-semibold' /> 
          <div className='flex justify-between mt-4'>
            <div>
              {/* <p>First Name</p> */}
              <label for="firstName">First Name</label>
              <input type='text' id='firstName' className='border border-solid  border-black w-[100%] rounded p-2 font-semibold '/></div>
            <div className='ml-4'>
               {/* <p>last Name</p> */}
            <label for="lastName">last Name</label>
              <input type='text' id='lastName' className='border border-solid  border-black w-[100%] rounded p-2 font-semibold '/></div>
          </div>
          <p className='text-sm mt-2'>Enter your first and last name as they appear on your government-issued ID.</p>
          <div className='mt-3'>

            {/* <p className='mt-3'>Password</p> */}
            <label for="password">Password</label>
            <input type='text' id='password' className='border border-solid  border-black w-[100%] rounded p-2 font-semibold'/>

          </div>
          <div className='mt-3'>

            {/* <p className='mt-3'>Confirm new Password</p> */}
            <label for="confirm">Confirm new Password</label>
            <input type='text' id='confirm' className='border border-solid  border-black w-[100%] rounded p-2 font-semibold'/>

          </div>
          <div className='mt-5'>
          <button className='border border-solid bg-[#303030] border-gray-500 w-[100%] rounded p-2 text-white font-semibold' >Create shopify account</button>
          </div>
          <p className='mt-5 text-center'>Already have a Shopify account?<span className='text-[#005bd3] hover:font-bold'>log in</span></p>
          <div>
          
          <h1 className='mt-7 text-sm '>By proceeding, you agree to the<span className='text-[#005db3] font-semibold cursor-pointer'> Terms and Conditions <span className='text-black text-sm cursor-default'>and</span> Privacy Policy</span></h1>
          <div className='mt-4 '>
            <span className='m-2 text-[#616161] text-sm cursor-pointer border-b-2 border-transparent hover:border-gray-400'>help </span>
            <span className='m-2 text-[#616161] text-sm cursor-pointer border-b-2 border-transparent hover:border-gray-400'>privacy</span>
            <span className='m-2 text-[#616161] text-sm cursor-pointer border-b-2 border-transparent hover:border-gray-400'>Terms</span>

          </div>




        </div>






        </div>
      </div>
    </main>

  )
}

export default page