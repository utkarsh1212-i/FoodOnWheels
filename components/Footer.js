'use client'
import React from 'react'
// import {Facebook , Instagram , LinkedIn} from '@mui/icons-material';
import { FacebookOutlined , Instagram , LinkedIn } from '@mui/icons-material';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex flex-col text-white justify-center align-middle w-screen p-4 pb-0 mt-10 gap-8 bg-slate-800'>
        {/* Social Icon Section */}
        <div className='flex flex-col justify-center text-center'>
            <h3 className='text-4xl font-bold'>Connect Us On</h3>
            <div className='flex gap-4 items-center justify-center'>
                <Link href='/' >
                <FacebookOutlined sx={{color: '#1877F2', cursor:'pointer', fontSize: '2rem'}}/>
                </Link>
                <Link href='/'>
                <Instagram sx={{color: '#E4405F', cursor:'pointer' ,fontSize: '2rem'}} />
                </Link>
                <Link href='/'>
                <LinkedIn sx={{color: '#0A66C2' , cursor:'pointer', fontSize: '2rem'}} />
                </Link>

            </div>
        </div>
        {/* Copyright Center */}
        <div className='bg-black text-center'>
            <p>Copyright@2023 FoodonWheels</p>

        </div>
    </div>
  )
}

export default Footer