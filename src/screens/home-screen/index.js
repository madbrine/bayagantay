import { Dela_Gothic_One, Jost, Unbounded } from "next/font/google";
import s from "./styles.module.css";
import { motion } from 'framer-motion';
import Image from "next/image";
import { useEffect, useState } from "react";
import Intro from "@/components/intro";
import Pile from "@/components/pile";
import AboutUs from "@/components/about-us";
import ReasonCards from "@/components/reason-cards";
import LinkMe from "@/components/link-me";
const unbounded = Unbounded({
    weight: '600',
    subsets: ['latin'],
  })
  const unboundedLight = Unbounded({
      weight: '400',
      subsets: ['latin'],
    })

function HomeScreen () {
    const [IntroRender, setIntroRender] = useState(true);
    const [AboutUsRender, setAboutUsRender] = useState(true);
    const [ReasonCardsRender, setReasonCardsRender] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={s["container"]}>
            <div className={s["pile"]}>
                <Pile/>
            </div>
            <div className={s["header"]}>
                <motion.div
                initial={{x: -300, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                >
                    <div className={s["header-logo-container"]}>
                        <div className={s["header-logo"]}>
                            <div className={unbounded.className}>
                                БАЯГАНТАЙ СТРОЙ
                            </div>
                        </div>
                        <div className={s["header-desc"]}>
                            <div className={unboundedLight.className}>
                                Мы опора надёжного дома!
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className={s["center-logo"]}>
                    <Image src={require("../../assets/images/logo.webp")}
                    />
                </div>
                <motion.div
                initial={{x: 300, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                >
                    <div className={s["button-offer"]}>
                        <div className={unbounded.className}
                        style={{}}>
                            CДЕЛАТЬ ЗАКАЗ
                        </div>
                    </div>
                </motion.div>
            </div>
            <Intro render={IntroRender} />
            <AboutUs render={AboutUsRender}/>
            <ReasonCards render={ReasonCardsRender}/>
            <LinkMe/>
        </div>
    )
}
export default HomeScreen;