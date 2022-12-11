import * as React from "react"
import { UilAngleDoubleDown } from '@iconscout/react-unicons';
import Navbar from "./Navbar";
import { motion } from 'framer-motion';
import { useState } from 'react'
let i = 0
import Image from 'next/image'
import modelS from '../image/modelS.jpeg';
import ModelSmobile from '../image/Homepage-Model-S-Mobile-LHD.jpeg'
export default function CarContainer(props) {


    function handleScroll(refPage) {


        refPage.current.scrollIntoView({ behavior: 'smooth' });

    }
    return (
        <div

            className="w-screen h-screen  flex flex-col bg-center text-center bg-cover  bg-no-repeat  items-center justify-between"
        >
            <div className="w-full h-full absolute z-2 hidden md:block">
                <Image src={modelS} className=' absolute   h-screen w-screen  object-cover' />
            </div>
            <div className="w-full h-full absolute z-2 md:hidden">
                <Image src={ModelSmobile} className=' absolute   h-screen w-screen  object-cover' />
            </div>
            <div className="z-30 flex flex-col justify-between h-full">
                <div className="flex-col  text-center gap-2 self-center p-5  mt-44 md:mt-20" >
                    <motion.h2 transition={{ duration: 0.5 }}
                        className="text-4xl font-semi-bold md-2xl" animate={{ opacity: 1 }}
                        initial={props.isAnimate && { opacity: 0 }}>{props.carName}</motion.h2>
                    <motion.small animate={{ opacity: 1 }} initial={props.isAnimate && { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-sm underline hidden lg:block mt-4">Planifier un essai routier</motion.small>
                </div>

                <motion.div style={{ marginBottom: props.isAnimate ? '' : '100px' }}

                    className="flex flex-col  w-screen gap-10 px-10  md:grid md:grid-cols-2 lg:w-auto">
                    <motion.button initial={props.isAnimate && { x: -30, opacity: 0 }} transition={{ duration: 1, delay: 0.75 }} animate={{ opacity: 1, x: 0 }}
                        className="bg-zinc-800 p-3 rounded-md  text-sm text-slate-50 ">Découvrir votre future véhicule</motion.button>
                    <motion.button initial={props.isAnimate && { opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.75 }}
                        className="bg-slate-300 p-3 rounded-md  text-sm">Véhicules en inventaire</motion.button>
                </motion.div>

            </div>
            {
                props.isAnimate && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.5 }}>
                    <UilAngleDoubleDown size='50px' className="my-2 self-center z-20 animate-bounce mt-10" />
                </motion.div>
            }
        </div >
    )
}