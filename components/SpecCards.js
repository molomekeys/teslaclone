import { motion } from 'framer-motion';
import Link from 'next/link';
export default function SpecCards(props) {
    console.log(props)
    return (

        <motion.div className='bg-black w-32 h-20 text-white'>
            <h3>Salut</h3>
            <motion.div>
                <h3>
                    {props.title}
                </h3>
                <p>{props.description}</p>
            </motion.div>
            <motion.div>
                <Image />
            </motion.div>
        </motion.div>
    )
}