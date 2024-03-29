import Image from 'next/image'
import { CiUser } from "react-icons/ci";


const page = () => {
  return (
    <main className='flex justify-center min-h-[100vh]  bg-gradient-to-r from-indigo-900 via-indigo-700 to-cyan-400 '>
      <div className='border border-solid border-gray-500 h-[100%] w-[450px]  rounded-lg p-[30px] shadow-lg bg-white  mt-28 p-5'>
        <div>  <img src='/image.svg  ' className='w-[100px] cursor-pointer'></img></div>
        <div>
          <h1 className='text-xl font-bold mt-[1.8rem] '>Choose Account</h1>
          <h3 className='text-[#616161] mb-3'> to continue to shopify</h3>
        </div>
        <div className='flex w-[100%] rounded p-5 hover:bg-gray-100 '>
            
            <div className='w-9 rounded bg-gray-500 cursor-pointer'><span className='bg-red-500'><CiUser className='text-center text-[30px] pl-2 rounded'/></span> </div>
          <div> <p className='font-semibold  ml-5 cursor-pointer mt-1'> Add Account</p></div>
          </div>

        <div className='mt-4'>
            <span className='m-2 text-[#616161] text-sm cursor-pointer border-b-2 border-transparent hover:border-gray-400'>help </span>
            <span className='m-2 text-[#616161] text-sm cursor-pointer border-b-2 border-transparent hover:border-gray-400'>privacy</span>
            <span className='m-2 text-[#616161] text-sm cursor-pointer border-b-2 border-transparent hover:border-gray-400'>Terms</span>

          </div>

        
        



      </div>



    </main>
  )
}

export default page