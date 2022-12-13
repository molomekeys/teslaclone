import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
export default function SpecCards(props) {
    console.log(props)
    return (

        <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: -30 }} transition={{ duration: 2 }}

            className=' flex flex-col  md:grid md:grid-cols-2 z-50 bg-transparent  gap-6 md:gap-20 '>
            <motion.div className='  w-full h-full  ' >
                <Image src={props.imgSrc}
                    width={1000} height={800} className='object-cover z-50 rounded-lg translate-z-10' />
            </motion.div>

            <div className='  flex flex-col gap-4   px-10 '>
                <h3 className='text-slate-300 font-semibold text-md md:text-lg'>
                    {props.title}
                </h3>
                <p className='  text-slate-300 text-md md:text-sm '>{props.description}</p>
            </div>


        </motion.div>
    )
}