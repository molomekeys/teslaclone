import Link from "next/link";
import BenchComponent from "../components/BenchMark";
import Navbar from "../components/Navbar";
import Image from 'next/image'
import modelS from '../image/modelS.jpeg';
import modelSInterior from '../image/MS-interior.jpeg'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react';
import SpecCards from "../components/SpecCards";
export async function getStaticProps(context) {
    const res = await fetch('https://teslaclone-c86d9-default-rtdb.firebaseio.com/Cars/1.json');
    const data = await res.json();
    return (
        { props: { data } }
    )
}
export default function ModelS(props) {
    console.log(props.data.specificites?.description)

    const refForAnim = useRef(null);
    const isInView = useInView(refForAnim);
    useEffect(() => {

        console.log(isInView)
    }, [isInView])

    let allElement = props.data.specificites?.title.forEach((e) => {
        return <SpecCards title={e.title} description={e.description} />
    });
    return (
        <main className="flex flex-col h-max w-screen">
            <Navbar />
            <section className="w-full h-screen ">



                <div className=" aboslute w-screen h-screen">
                    <Image src={modelS} className=" object-cover " />
                </div>

                ]
                <div className="bg-black  flex  
                    w-screen z-20  mb-20">

                    <BenchComponent topSpeed={props.data.speed}
                        range={props.data.range} />
                </div>



            </section>

            <hr></hr>
            <section
                className=" bg-black h-full w-full text-center align-text-center content-center z-20
                     text-3xl  ">
                <motion.div ref={refForAnim}

                >
                    <motion.h2 transition={{ delay: 2 }}
                        style={{ opacity: isInView ? 1 : 0 }}
                        className=" text-3xl self-center p-8 border-slate-900 border-5
                         h-40 shadow-xl text-white">L'intérieur du futur </motion.h2>
                </motion.div>
                <div>
                    {/* <Image src={modelSInterior} className="object-cover" /> */}
                </div>
            </section>

            <motion.section>
                {allElement}
            </motion.section>

        </main>)

}