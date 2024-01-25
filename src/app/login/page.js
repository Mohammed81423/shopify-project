
import Image from 'next/image'



const page = () => {
  return (

    <main className='flex justify-center min-h-[100vh]  bg-gradient-to-r from-indigo-900 via-indigo-700 to-cyan-400 '>
      <div className='border border-solid border-gray-500 h-[78vh] w-[400px]  rounded-lg p-[30px] shadow-lg bg-white  mt-6'>
        <div>  <img src='/image.svg  ' className='w-[100px] cursor-pointer'></img></div>
        <div>
          <h1 className='text-xl font-bold mt-[1.8rem] '>Log in</h1>
          <h3 className='text-[#616161] mb-3'>Continue to Shopify</h3>
        </div>
        <div className='flex flex-col'>    <label for="connect" className="text-[14px]">Email </label>
          <input type="email" id="connect" placeholder='user email' className='border border-solid border-gray-500 rounded p-2 mb-3 ' /></div>
        <button className='border border-solid bg-[#303030] border-gray-500 w-[100%] rounded p-2 text-white font-semibold' >Contiue with email</button>
        <div > <hr className='mt-2 '/> <h1 className='text-center mt-5'>or</h1>
        </div>
        <div>
          <div className='flex justify-around mt-2'> <p className='border  border-solid w-[80px] rounded-lg bg-[#f1f1f1]'> <img src='/facebook.png ' className='w-[30px] h-[30px] mt-1 ml-5 ' ></img></p>
          <p className='border  border-solid w-[80px] rounded-lg  bg-[#f1f1f1]'>   <img src='/google.png ' className='w-[40px] ml-5 rounded-full'></img></p>
          <p className='border  border-solid w-[80px] rounded-lg bg-[#f1f1f1]'>   <img src='/apple.png ' className=' rounded-full w-[50px] h-[35px] ml-5'></img></p>
            {/* <img src='/facebook.png ' className='w-[100px]'></img> */}
          </div>
          <h1 className='mt-7 text-sm '>New to shopify?<span className='text-[#005db3] font-semibold cursor-pointer hover:font-bold'>Get started --</span></h1>
          <div className='mt-4'>
            <span className='m-2 text-[#616161] text-sm border-b-2 border-transparent hover:border-gray-400 cursor-pointer'>help </span>
            <span className='m-2 text-[#616161] text-sm border-b-2 border-transparent hover:border-gray-400 cursor-pointer'>privacy</span>
            <span className='m-2 text-[#616161] text-sm border-b-2 border-transparent hover:border-gray-400 cursor-pointer'>Terms</span>

          </div>




        </div>




      </div>



    </main>
  )
}

export default page