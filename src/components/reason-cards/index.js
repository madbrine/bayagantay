import { AnimatePresence, motion } from "framer-motion";
import { Unbounded } from "next/font/google";
import s from "./styles.module.css";

const unbounded = Unbounded({
    weight: '600',
    subsets: ['latin'],
});
const unboundedLight = Unbounded({
    weight: '400',
    subsets: ['latin'],
});
function ReasonCards(props) {
    return (
        <AnimatePresence>
            {props.render &&
                <motion.div
                initial={{y: 300, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y:300, opacity: 0}}
                className={s["container"]}>
                    <div className={s["box"]}>
                        <div className={s["item"]}>
                            <div className={s["value"]}>
                                <div className={unbounded.className}>-40°C</div>
                            </div>    
                            <div className={s["text"]}>
                                <div className={unboundedLight.className}>Работаем даже при зимних морозах Якутии</div>
                            </div>
                        </div>
                        <div className={s["item"]}>
                            <div className={s["value"]}>
                                <div className={unbounded.className}>8</div>
                            </div>
                            <div className={s["text"]}>
                                <div className={unboundedLight.className}>Лет на рынке</div>
                            </div>
                        </div>
                    </div>
                    <div className={s["box"]}>
                        <div className={s["item"]}>
                            <div className={s["value"]}>
                                <div className={unbounded.className}>100%</div>
                            </div>
                            <div className={s["text"]}>
                                <div className={unboundedLight.className}>Гарантия</div>
                            </div>
                        </div>
                        <div className={s["item"]}>
                            <div className={s["value"]}>
                                <div className={unbounded.className}>50+</div>
                            </div>
                            <div className={s["text"]}>
                                <div className={unboundedLight.className}>Выполненных заказов</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
} 
export default ReasonCards;