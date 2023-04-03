import { AnimatePresence, motion } from "framer-motion";
import { Unbounded } from "next/font/google";
import s from './styles.module.css';
const unbounded = Unbounded({
    weight: '600',
    subsets: ['latin'],
  })

function Intro(props) {
    return (
        <AnimatePresence>
            { props.render &&
            <motion.div 
            initial={{y: 300, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y:300, opacity: 0}}
            className={s["intro-container"]}>
                <div className={s["intro-text"]}>
                    <div className={unbounded.className}>
                        НЕТ
                    </div>
                </div>
                <div className={s["intro-text"]}>
                    <div className={unbounded.className}>
                        ФУНДАМЕНТА,
                    </div>
                </div>
                <div className={s["intro-desc-box"]}>

                </div>
                <div className={s["intro-desc"]}>
                    <div className={unbounded.className}>
                        НЕТ ДОМА. ДОВЕРЬТЕ
                    </div>
                </div>
                <div className={s["intro-desc"]}>
                    <div className={unbounded.className}>
                        ФУНДАМЕНТ ИНЖЕНЕРАМ!
                    </div>
                </div>
            </motion.div>
            }
        </AnimatePresence>    
    )
}
export default Intro;