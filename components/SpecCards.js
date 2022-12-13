import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
export default function SpecCards(props) {
    console.log(props)
    return (

        <motion.div className=' grid grid-cols-1 lg:flex z-50 bg-transparent md:w-4/5 gap-4 md:gap-20 '>
            <div className='  flex flex-col gap-2 md:w-4/5 my-auto'>
                <h3 className='text-slate-300 font-semibold text-md md:text-lg'>
                    {props.title}
                </h3>
                <p className='  text-slate-300 text-md md:text-sm '>{props.description}</p>
            </div>
            <motion.div className='    '>
                <Image src='/image/model3.jpeg'
                    width={1000} height={800} className='object-cover z-50 rounded-lg translate-z-10' />
            </motion.div>


        </motion.div>
    )
}