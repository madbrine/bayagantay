import Head from 'next/head'
import StartScreen from '@/screens/start-screen'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import HomeScreen from '@/screens/home-screen'


export default function Home() {
  const [isJalousie, setJalousie] = useState(true)
  const handleJalousie = () => {
    setJalousie(false);
  }
  useEffect(() => {
      setTimeout(handleJalousie, 4700);
  }, []);
  
  return (
    <>
      <Head>
        <title>Баягантай строй</title>
        <meta name="description" content="Баягантай - строительная компания" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='main-page-container'>
        <div>
          <AnimatePresence>
          {isJalousie &&
          <motion.div
          initial={{y: 0}}
          exit={{y: -900}}
          transition={{duration: 0.5}}
          className='main-page-jalousie'
          >
            <StartScreen/> 
          </motion.div>
          }
        </AnimatePresence>
        </div>
        <HomeScreen/>
      </main>
    </>
  )
}
