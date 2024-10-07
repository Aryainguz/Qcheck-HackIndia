"use client"
import * as Constants from "@/Utils/config";
import { ethers } from 'ethers';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { Web3Provider } = require("ethers/providers"); 
import Image from 'next/image'
import product from '../../public/product.png'
import batch from '../../public/batch.png'
import manu from '../../public/manu.png'


function FetchDataofProduct() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('0');
    const [message, setMessage] = useState('');
    async function finalUpload(productid) {
        
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner();
        const contractInstance = new ethers.Contract(Constants.contractAddress, Constants.contractAbi, signer);
        try{
            const tx = await contractInstance.getProductHistory(productid);
              const carved = await tx;
            
                setData(carved)
                setMessage("Product is Successfully Verified !");
                toast.success("Product Data fetched Successfully !");
                console.log("in upload to blockchain backend api part");
                console.log(carved[0],carved[1],carved[2],carved[3]);
                console.log("the tx hash is ",carved.hash);
        }
        catch(err){
            toast.error("Product Data not found !");
            setMessage("Product is Invalid !");
            setData(["","","",""])
        }
            
      }
  return (
    <>
    <ToastContainer/>
    <div className='h-screen bg-gray-100 flex flex-col justify-center space-between'>
        <div className='p-2 bg-white w-auto  flex flex-row justify-center space-between mx-auto gap-5'>

        
    <input type="text" onChange={(e)=>setQuery(e.target.value)} className='w-[400px]  p-2 mx-auto pt-3 pb-2 border-2 border-black border-rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 mx-auto p-1 outline-none font-medium ' placeholder='ProductId'></input>
    <button onClick={()=>finalUpload(query)} className='p-2 w-[230px] mx-auto  text-white font-medium rounded-lg bg-purple-700  active:text-3xl text-2xl'>Fetch product</button>
    </div>

            

    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <Image src={product} width={40} height={40} alt="product_img" />
          </div>
          <h6 className="text-4xl font-bold  text-green-500">
          {data[0]}
          </h6>
          <p className="mb-2 font-bold text-md text-2xl mt-5">Product Name</p>
          
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
          <Image src={batch} width={40} height={40} alt="product_img" />
          </div>
          <h6 className="text-4xl font-bold  text-green-500">
          {data[1]}
          </h6>
          <p className="mb-2 font-bold text-md text-2xl mt-5">Batch Number</p>
          
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
          <Image src={manu} width={40} height={40} alt="manu_img" />
          </div>
          <h6 className="text-xs font-bold  text-green-500">{data[2]}</h6>
          <p className="mb-2 font-bold text-md text-2xl mt-5">Manufacturer</p>
          
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center m-auto w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50  sm:w-12 sm:h-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="thermometer"><g data-name="Cold"><path fill="#4fc3f7" d="M27,33.5151V13a8,8,0,0,0-16,0V33.5151a14,14,0,1,0,16,0Z"></path><path fill="#ef5350" d="M22,38.6792V28a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V38.6792a7,7,0,1,0,6,0Z"></path><path fill="#4fc3f7" d="M33 29H30a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2zM31 17H30a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM31 25H30a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM33 21H30a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z"></path><path fill="#81d4fa" d="M49,25a1,1,0,0,1-1-1V6a1,1,0,0,1,2,0V24A1,1,0,0,1,49,25Z"></path><path fill="#81d4fa" d="M58 16H40a1 1 0 0 1 0-2H58a1 1 0 0 1 0 2zM49 12a.9967.9967 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L49 9.5859 52.293 6.293a1 1 0 1 1 1.414 1.414l-4 4A.9967.9967 0 0 1 49 12z"></path><path fill="#81d4fa" d="M57 20a.9967.9967 0 0 1-.707-.293l-4-4a.9994.9994 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L54.4141 15l3.2929 3.293A1 1 0 0 1 57 20zM53 24a.9967.9967 0 0 1-.707-.293L49 20.4141 45.707 23.707a1 1 0 0 1-1.414-1.414l4-4a.9994.9994 0 0 1 1.414 0l4 4A1 1 0 0 1 53 24zM41 20a1 1 0 0 1-.707-1.707L43.5859 15 40.293 11.707a1 1 0 0 1 1.414-1.414l4 4a.9994.9994 0 0 1 0 1.414l-4 4A.9967.9967 0 0 1 41 20z"></path></g></svg>
          </div>
          <h6 className="text-4xl font-bold  text-green-500">{data[3]}</h6>
          <p className="mb-2 font-bold text-md text-2xl mt-5">Temperature</p>
          
        </div>
      </div>
    </div>


    </div>
    </>
  )
}

export default FetchDataofProduct