import { motion, AnimatePresence } from "framer-motion";
import { Roboto, Unbounded } from "next/font/google";
import { useState, useEffect } from "react";
import s from './styles.module.css'
import Link from "next/link";
const unbounded = Unbounded({
    weight: '600',
    subsets: ['latin'],
  })
function StartYears () {
    const [isVisible, setVisible] = useState(false);
    const [isDecade, setDecade] = useState(1)
    const [isYear, setYear] = useState(6);
    const handleVisible = () => {
            if(isYear == 9) {
                setYear(0);
                setDecade(2);
            } else {
                setYear(isYear + 1);
            } 
    }
    useEffect(() => {
        let changer = setTimeout(handleVisible, 500);
        if(isDecade == 2 && isYear ==3) {
            clearInterval(changer)
        }
        console.log('rerender')
      });
    return (
        <div className={s['container']}>
            <div onClick={handleVisible}
                className={unbounded.className}
                style={{fontSize: 100}}
            >
                20
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                    <AnimatePresence>
                        <motion.a
                        key={isDecade}
                        initial={{y: 100, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        exit={{y: -100, opacity: 0, position: 'absolute'}}
                        style={{display: 'flex', flexDirection: 'column', fontSize: 100}}
                        className={unbounded.className}
                        >
                            {isDecade}
                        </motion.a>
                    </AnimatePresence>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                    <AnimatePresence>
                        <motion.div
                            key={isYear}
                            initial={{y: 100, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: -100, opacity: 0, position: 'absolute'}}
                            style={{display: 'flex', flexDirection: 'column', fontSize: 100}}
                            className={unbounded.className}
                        >
                            {isYear}
                        </motion.div>
                    </AnimatePresence>                
            </div>
        </div>
    )
};
export default StartYears;

export const variants = {
    show: {
        height: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
    hide: {
        height: 100,
        opacity: 0
    },
    exit: {
        height: -100,
        opacity: 1
    }
  };
  