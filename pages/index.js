import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import CardContainer from '../components/CardContainer'
import CarsLayout from '../components/CarsLayout'

import Navbar from '../components/Navbar';
export async function getStaticProps(context) {
  const res = await fetch('https://teslaclone-c86d9-default-rtdb.firebaseio.com/Cars.json');
  const data = await res.json();
  return (
    { props: { data } }
  )
}
export default function Home(props) {

 
  console.log(props)
  let allElement = props.data.map(e => {
    return <CarsLayout carName={e?.name} isAnimate={e?.animate} />
  })
  return (
    <div className=''>

      <div className='z-50 fixed'>

        <Navbar />

      </div>
      {allElement}
    </div>
  )
}
