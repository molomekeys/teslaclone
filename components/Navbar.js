import React, { useState } from 'react';
import { motion } from 'framer-motion'
import Link from 'next/link';
export default function Navbar() {
    return (
        <motion.nav animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, }}
            className='flex bg-transparent justify-between font-semi-bold 
        m-2 h-14 items-center p-5 w-full lg:px-20 text-sm fixed z-20'>
            <Link href='/' className='text-xl'>Clone Tesla</Link>

            <ol className='hidden lg:flex gap-5 justify-self-center  lg:-z-50 '>
                <Link href='/models'> <li className='hover:bg-slate-300 p-2'>  Model S  </li></Link>

                <li className='hover:bg-slate-300 p-2   '>Model Y</li>
                <li className='hover:bg-slate-300 p-2 ' >Model X</li>
                <li className='hover:bg-slate-300 p-2 ' >Cybertruck</li>
                <li className='hover:bg-slate-300 p-2 ' >Powerwall</li>
            </ol>
            <ol className='hidden md:flex gap-5 '>
                <li className='hover:bg-slate-300 p-2'>Boutique</li>
                <li className='hover:bg-slate-300 p-2'>Compte</li>
                <li className='hover:bg-slate-300 p-2'>Menu</li>
            </ol>
            <button className='md:hidden bg-blue-100 p-2 rounded-sm'>Menu</button>
        </motion.nav>
    )
}