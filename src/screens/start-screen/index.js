import StartYears from "@/components/start-years";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import s from "./styles.module.css";
import Image from "next/image";

function StartScreen () {
    const [isVisible, setVisible] = useState(true);
    const isGallery = [
        {img: require('../../assets/images/1.jpg')},
        {img: require('../../assets/images/2.jpg')},
        {img: require('../../assets/images/3.jpg')},
        {img: require('../../assets/images/4.jpg')},
        {img: require('../../assets/images/5.jpg')},
        {img: require('../../assets/images/6.jpg')},
        {img: require('../../assets/images/7.jpg')},
    ]
    const [isGalleryVisible, setGalleryVisible] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ])
    const handleVisible = () => {
        setVisible(false);
    }
    const handleGallery = (n) => {
        const oldArr = [true, isGalleryVisible]
        setGalleryVisible([true, ...isGalleryVisible])
    }
    useEffect(() => {
        let viewer = setTimeout(handleGallery, 500);
        if(isGalleryVisible.length == 15) {
            clearInterval(viewer)
        }
        console.log('review')
    }, );
    useEffect(() => {
        setTimeout(handleVisible, 4300);
    }, []);
    
    return (
        <AnimatePresence>
            {isVisible &&
            <div className={s['container']}>
                <motion.div 
                className={s['start-years']}
                initial={{opacity: 1}}
                exit={{opacity: 0}}
                >   
                    <div style={{zIndex: 4, position: 'relative'}}>
                        <StartYears/>
                    </div>
                    {isGalleryVisible[0] &&
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    style={{position: 'absolute', top: 20, left: 20}}
                    >
                        <Image 
                        alt="foto"
                        src={isGallery[0].img} 
                        style={{ borderRadius: 17}}
                        height={270}
                        />
                    </motion.div>
                    }
                    {isGalleryVisible[1] &&
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    style={{position: 'absolute', top: 20, right: 20}}
                    >
                        <Image 
                        alt="foto"
                        src={isGallery[1].img} 
                        style={{ borderRadius: 17}}
                        height={190}
                        />
                    </motion.div>
                    }
                    {isGalleryVisible[2] &&
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    style={{position: 'absolute', top: 450, right: 20}}
                    >
                        <Image 
                        alt="foto"
                        src={isGallery[2].img} 
                        style={{ borderRadius: 17}}
                        height={250}
                        />
                    </motion.div>
                    }
                    {isGalleryVisible[3] &&
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    style={{position: 'absolute', top: 390, left: 20}}
                    >
                        <Image 
                        alt="foto"
                        src={isGallery[3].img} 
                        style={{ borderRadius: 17}}
                        height={200}
                        />
                    </motion.div>
                    }
                    {isGalleryVisible[4] &&
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    style={{position: 'absolute', top: 30, left: '45%'}}
                    >
                        <Image 
                        alt="foto"
                        src={isGallery[4].img} 
                        style={{ borderRadius: 17}}
                        height={200}
                        />
                    </motion.div>
                    }
                    {isGalleryVisible[5] &&
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    style={{position: 'absolute', top: 480, left: '50%'}}
                    >
                        <Image 
                        alt="foto"
                        src={isGallery[5].img} 
                        style={{ borderRadius: 17}}
                        height={270}
                        />
                    </motion.div>
                    }
                    {isGalleryVisible[6] &&
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    style={{position: 'absolute', top: 520, left: '22%'}}
                    >
                        <Image 
                        alt="foto"
                        src={isGallery[6].img} 
                        style={{ borderRadius: 17}}
                        height={270}
                        />
                    </motion.div>
                    }
                </motion.div>
            </div>
            }
        </AnimatePresence>   
    )
}
export default StartScreen;