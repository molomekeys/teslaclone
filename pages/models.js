import Link from "next/link";
import BenchComponent from "../components/BenchMark";
import Navbar from "../components/Navbar";
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react';
import SpecCards from "../components/SpecCards";
let benchDat = [{ range: "637km" }, { speed: "2.1s" }, { maxspeed: "322 km/h" }, { puissance: "1020 hp" },]
let dataSpec = [{
    title: "Rester connecté",
    description: "Connectez-vous instantanément avec plusieurs appareils Bluetooth, ou chargez rapidement avec la recharge sans fil et la recharge USB-C de 36 watts."
    , imgSrc: "/image/MS-Interior-Grid-A-Desktop.jpeg",
},
{
    title: "Son immersif", imgSrc: "/image/MS-Interior-Grid-D-Desktop.jpeg",
    description: "Un système audio de 960 watts à 22 haut-parleurs avec réduction active du bruit de la route offre une écoute immersive et une qualité sonore digne d’un studio."
},
{
    title: "De la place pour tout",
    imgSrc: "/image/MS-Interior-Grid-A-Desktop.jpeg",
    description: "Avec des coffres avant et arrière et des sièges rabattables à plat, la Model S est une voiture de luxe assez spacieuse pour y entrer votre vélo sans enlever de roue, et vos bagages aussi."
}]
export async function getStaticProps(context) {
    const res = await fetch('https://teslaclone-c86d9-default-rtdb.firebaseio.com/Models/model-s.json');
    const data = await res.json();
    return (
        { props: { carData: data.spec } }
    )
}
export default function ModelS(props) {
    const refForAnim = useRef(null);
    const isInView = useInView(refForAnim);
    useEffect(() => {

        console.log(isInView)
    }, [isInView])

    let allSpec = dataSpec.map((e) => {
        return <SpecCards title={e.title} description={e.description} imgSrc={e.imgSrc} />
    })
    return (

        <section className="flex flex-col h-max w-screen">

            <section className="w-full h-screen relative flex flex-col items-center ">





                <div className=" aboslute w-screen h-screen">
                    <Image src='/image/Model-S-Main.jpeg' fill className=" object-cover " />
                </div>
                <div className="bg-transparent  flex  items-center justify-center 
                    w-screen z-20  mb-20">

                    <BenchComponent Info={benchDat} />

                </div>



            </section>


            <section
                className="relative w-screen h-screen bg-black  text-center align-text-center content-center z-20
                     text-3xl  ">
                <motion.div ref={refForAnim}

                >

                    <motion.h2 transition={{ delay: 2 }}
                        style={{ opacity: isInView ? 1 : 0 }}
                        className=" text-3xl self-center p-8 border-slate-900 border-5
                         h-40 shadow-xl text-white">L'intérieur du futur </motion.h2>
                </motion.div>
                <div className="w-full h-full absolute">
                    <Image src='/image/MS-Interior-Hero-Desktop.jpeg' fill className="object-cover" />
                </div>
            </section>


            <motion.section className=" place-items-center place-content-center md:p-20 lg:px-40 z-50 mt-20 bg-black ">
                <div className=" flex flex-col items-center gap-10 md:gap-20 mt-40 bg-black">
                    {allSpec}
                </div>
            </motion.section>
        </section>


    )

}