"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ethers } from "ethers";
const { Web3Provider } = require("ethers/providers");
import * as Constants from "@/Utils/config";
const axios = require("axios");
const FormData = require("form-data");
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bcrypt from "bcryptjs";

function AddDryProduct() {
  const [patients, setPatients] = useState([]);
  const [data, setData] = useState([]);
  const [QR, setQR] = useState("");

  useEffect(() => {
    const connectToMetamask = async () => {
      try {
        if (window.ethereum) {
          console.log(window.ethereum);
          const provider = new ethers.BrowserProvider(window.ethereum);
          console.log("provider");
          console.log(provider);
          //   setProvider(provider);
          const signer = await provider.getSigner();

          console.log(await signer.getAddress());
          const contractInstance = new ethers.Contract(
            Constants.contractAddress,
            Constants.contractAbi,
            signer
          );
          //   const tx = await contractInstance.addProduct(0,'aspirin', '2023', '26/11/23', '25/11/27', '25');
          //   const carved = await tx.wait();

          //     console.log("in upload to blockchain backend api part");
          //     console.log(carved);
          //     console.log("the tx hash is ",carved.transactionHash);

          const tasks = await contractInstance.getAllProducts();

          //   setPatients(tasks);
          // const data = tasks.;
          console.log("the tasks are below");
          console.log(tasks);
          console.log("connect to metamask !");
        } else {
          console.log("Metamask not found");
        }
      } catch (err) {
        console.error(err);
      }
    };

    connectToMetamask();
  }, []);

  async function finalUpload(data) {
    const {
      productId,
      productName,
      batchNumber,
      manufacturer,
      manufacturingDate,
      expirationDate,
      Temperature,
    } = data;
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contractInstance = new ethers.Contract(
      Constants.contractAddress,
      Constants.contractAbi,
      signer
    );
    const tx = await contractInstance.addProduct(
      productId,
      productName,
      batchNumber,
      manufacturingDate,
      expirationDate,
      Temperature
    );
    const carved = await tx.wait();
    toast.success("Product Added Successfully !");
    console.log("in upload to blockchain backend api part");
    console.log(carved);
    console.log("the tx hash is ", carved.hash);
  }

  return (
    <>
      <ToastContainer />
      <div className="mx-auto bg-gray-100  h-auto p-4">
        {/* fdsafsdkjfskdbf  */}

        {
          QR ? (
            <div className="flex flex-col mx-auto">
              <h1 className="text-center font-bold mx-auto text-3xl pt-3">
                Your QR Code
              </h1>
              <img src={QR} className="mx-auto" />
            </div>
          ) : (
            <></>
          )
        }
        <br />

        <Formik
          initialValues={{
            productId: 0,
            productName: "",
            batchNumber: "",
            manufacturer: "",
            manufacturingDate: "",
            expirationDate: "",
            Temperature: "",
          }}
          validationSchema={Yup.object({
            productId: Yup.number().required("Required !"),
            productName: Yup.string().required("Required !"),
            batchNumber: Yup.string().required("Required !"),
            manufacturer: Yup.string().required("Required !"),
            manufacturingDate: Yup.string().required("Required !"),
            expirationDate: Yup.string().required("Required !"),
            Temperature: Yup.string().required("Required !"),
          })}
          onSubmit={async (values) => {
            // Handle form submission here, including sending the data and file to your backend.

            const newValues = { ...values };
            //  console.log(newValues);
            setData(newValues);
            console.log("new Values added to data");
            console.log(data);
            console.log(newValues.productName);
            await finalUpload(data);

            //generating qr code
            const productId = await data.productId;
            const url = `http://localhost:3000/verifycode/${productId}`;
            const qrurl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
            setQR(qrurl);

            console.log("in upload to blockchain backend api part");
          }}
        >

          <Form className="mx-auto flex w-[450px] rounded-lg shadow-xl  flex-col bg-white text-black ">
            <h1 className="text-center font-bold mx-auto text-3xl pt-3">
              Add Your Product
            </h1>
            {/* productid  */}
            <div className="p-1 flex flex-col mx-auto ">
              {/* <label className='font-medium'>ProductId:</label> */}
              <Field
                type="number"
                className="pt-3 pb-2 block w-[330px] px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 mx-auto p-1 outline-none font-medium w-full "
                name="productId"
                placeholder="ProductId"
              />
              <ErrorMessage
                name="ProductId"
                component="div"
                className="error"
              />
            </div>

            {/* product name  */}
            <div className="p-3 flex flex-col mx-auto ">
              {/* <label className='font-medium'>productName:</label> */}
              <Field
                type="text"
                className="pt-3 pb-2 block w-[330px] px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 mx-auto p-1 font-medium "
                name="productName"
                placeholder="ProductName"
              />
              <ErrorMessage
                name="productName"
                component="div"
                className="error"
              />
            </div>

            {/* batchnumber  */}
            <div className="py-3 flex flex-col mx-auto">
              {/* <label className='font-medium'>batchNumber:</label> */}
              <Field
                type="text"
                className=" pt-3 pb-2 block w-[330px] px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 mx-auto p-1 font-medium  "
                name="batchNumber"
                placeholder="batchNumber"
              />
              <ErrorMessage
                name="batchNumber"
                component="div"
                className="error"
              />
            </div>

            <div className="p-3 flex flex-col mx-auto">
              {/* <label className='font-medium'> manufacturer:</label> */}
              <Field
                type="text"
                className="pt-3 pb-2 block w-[330px] px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 mx-auto p-1 font-medium "
                name="manufacturer"
                placeholder="manufacturer"
              />
              <ErrorMessage
                name="manufacturer"
                component="div"
                className="error"
              />
            </div>

            {/* manufacturer date  */}
            <div className="p-3 flex flex-col mx-auto h-[100px]">
              {/* <label className='font-medium'>manufacturingDate:</label> */}
              <Field
                type="text"
                className="pt-3 pb-2 block w-[330px] px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 mx-auto  p-1 font-medium "
                name="manufacturingDate"
                placeholder="manufacturingDate"
              />
              <ErrorMessage
                name="expirationDate"
                component="div"
                className=" error"
              />
            </div>

            {/* expiration date  */}
            <div className="p-3 flex flex-col mx-auto">
              {/* <label className='font-medium'> expirationDate:</label> */}
              <Field
                type="text"
                className="pt-1 pb-2 block w-[330px] px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 mx-auto outline-none p-1 font-medium  "
                name="expirationDate"
                placeholder="expirationDate"
              />
              <ErrorMessage
                name="expirationDate"
                component="div"
                className="error"
              />
            </div>

            {/* Temperature */}
            <div className="p-3 flex flex-col mx-auto">
              {/* <label className='font-medium'> Temperature:</label> */}
              <Field
                type="text"
                className="pt-3 pb-2 block w-[330px] px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 mx-auto p-1 font-medium"
                name="Temperature"
                placeholder="Temperature"
              />
              <ErrorMessage
                name="Temperature"
                component="div"
                className="error"
              />
            </div>

            {/* this code is for remarks and a string value will be stored in the file upload thing that file upload thing is not working so i have commented it out actually that file is working but the thing is that file will never be used  */}

            {/* <div className='p-3 flex flex-col mx-auto bg-blue-300'>
            <label className='font-medium'>Upload File:</label>
            <input type="file" onChange={handleFileChange} name="file" />
          </div> */}

            <button
              type="submit"
              className="p-2 w-[330px] mx-auto  text-white font-medium rounded-lg mt-2 bg-purple-700 mb-5 active:text-3xl text-2xl"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default AddDryProduct;
