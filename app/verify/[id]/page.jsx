import User from "../../../models/user.js"
import db from "../../../config/db.js"
import Link from "next/link.js";

import React from 'react';

const page = async ({ params }) => {
  const { id } = params;
  await db();
  const user = await User.findOneAndUpdate(
    { verification_token: id },
    { $set: { verified: true } }
  );
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-slate-100'>
        <div className='h-5/6 md:w-1/3 w-full bg-white shadow-xl'>
            <div className='h-1/2 w-full  flex justify-center items-center mt-10'>
                <div className='h-full bg-green-50 rounded-full flex justify-center items-center '>
                {/* <img className='h-full' src={okimg} alt="" /> */}
                </div>
            </div>
            <div className='flex justify-center items-center w-full flex-col gap-3'>
                <h1 className='text-4xl text-green-400 font-bold'>Success</h1>  
                <h1 className='text-slate-600 text-xl'>You have successfully verified you Email ,</h1>
                <h1 className='text-slate-600 text-xl'> You can login now!</h1>
                <Link href="/login">
                <button className='w-1/2 bg-green-400 h-9 rounded-3xl text-white font-bold shadow-xl'>Login</button>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default page