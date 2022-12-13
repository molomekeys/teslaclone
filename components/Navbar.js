import React, { useState } from 'react';
import { motion } from 'framer-motion'
import Link from 'next/link';
import MenuDrawer from './MenuDrawer';
export default function Navbar() {
    return (
        <motion.nav animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, }}
            className='flex bg-transparent justify-between font-semi-bold 
        m-2 h-14 items-center p-5  lg:px-20 text-sm w-screen '>
            <div>
                <Link href='/' className='text-xl'>
                    Clone Tesla
                </Link>
            </div>

            <ol className='hidden xl:flex  font-bold gap-5  z-40'>
                <Link href='/models'> <li className='hover:bg-slate-300 p-2'>  Model S  </li></Link>

                <li className='hover:bg-slate-300 p-2    '>Model 3</li>
                <li className='hover:bg-slate-300 p-2 ' >Model Y</li>
                <li className='hover:bg-slate-300 p-2 ' >Powerwall</li>
            </ol>

            <ol className='hidden font-bold xl:flex gap-5 z-40 '>
                <li className='hover:bg-slate-300 p-2'>Boutique</li>
                <li className='hover:bg-slate-300 p-2'>Compte</li>
                <li className='hover:bg-slate-300 p-2'>Menu</li>
            </ol>


            <div className='xl:hidden hover:bg-blue-50 p-2 rounded-sm hover:text-slate-500'>

                <MenuDrawer />
            </div>

        </motion.nav>
    )
}