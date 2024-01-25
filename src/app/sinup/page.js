import Image from 'next/image'


const page = () => {
  return (
    <main className='flex justify-center min-h-[100vh]  bg-gradient-to-r from-indigo-900 via-indigo-700 to-cyan-400 '>
      <div className='border border-solid border-gray-500 h-[85vh] w-[400px]  rounded-lg p-[30px] shadow-lg bg-white  mt-6'>
        <div>  <img src='/image.svg  ' className='w-[100px]'></img></div>
        <div>
          <h1 className='text-xl font-bold mt-[1.8rem] '>Create a shopify Account</h1>
          <h3 className='text-[#616161] mb-3'>one Last step before starting your free trial.</h3>
        </div>
        <div>
        <button className='border border-solid  border-gray-500 w-[100%] rounded p-2 font-semibold'> sign up with email </button>
        <button className='border border-solid  border-gray-500 w-[100%] rounded p-2 font-semibold'> sign up with apple </button>
        <button className='border border-solid  border-gray-500 w-[100%] rounded p-2 font-semibold'> sign up with facebook </button>
        <button className='border border-solid  border-gray-500 w-[100%] rounded p-2 font-semibold'> sign up with google</button>
        


        </div>
        
        <div>
          
          <h1 className='mt-7 text-sm '>By proceeding, you agree to the<span className='text-[#005db3] font-semibold cursor-pointer'> Terms and Conditions <span>and</span> Privacy Policy</span></h1>
          <div className='mt-4'>
            <span className='m-2 text-[#616161] text-sm'>help </span>
            <span className='m-2 text-[#616161] text-sm'>privacy</span>
            <span className='m-2 text-[#616161] text-sm'>Terms</span>

          </div>




        </div>




      </div>



    </main>
  )
}

export default page