import { AnimatePresence, motion } from "framer-motion"
import { Unbounded } from "next/font/google"
import Image from "next/image";
import s from "./styles.module.css"
const unbounded = Unbounded({
    weight: '600',
    subsets: ['latin'],
});
const unboundedLight = Unbounded({
    weight: '400',
    subsets: ['latin'],
});
function AboutUs(props) {
    return (
        <AnimatePresence>
        {props.render &&
        <motion.div 
        initial={{y: 300, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y:300, opacity: 0}}
        className={s["container"]}>
            <div className={s["text-box"]}>
                <div  className={s["text-header"]}>
                    <div className={unbounded.className}>Мы строительная компания с многолетним опытом</div>
                </div>
                <div className={s["text-desc"]}>
                    <div className={unboundedLight.className}>
                    Наша команда состоит из профессиональных инженеров, которые знают условия нашего климата и его особенности как никто другой!
                    </div>
                </div>
            </div>
            <div className={s["image-box"]} style={{borderRadius: 7}}>
            </div>
        </motion.div>
        }
        </AnimatePresence>
    )
}
export default AboutUs;