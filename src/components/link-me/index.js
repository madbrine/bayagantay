import { Unbounded } from "next/font/google";
import s from "./styles.module.css";
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
const unbounded = Unbounded({
    weight: '600',
    subsets: ['latin'],
  })
  const unboundedLight = Unbounded({
      weight: '400',
      subsets: ['latin'],
    })

function LinkMe () {
    return (
        <div className={s["container"]}>
            <div className={s["fire"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                    <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
                </svg>
            </div>
            <div className={s["header"]}>
                <div className={unbounded.className}>Позвоните прямо сейчас!</div>
            </div>
            <div className={s["desc"]}>
                <div className={unboundedLight.className}>Или напищите нам в <a href="https://wa.me/77770535760" className={s["whatsapp"]}>WhatsApp</a>, наши специалисты ответят вам как можно быстрее</div>
            </div>
            <div className={s["link-table"]}>
                <div className={s["link"]}>
                    <BsWhatsapp/>
                    <div className={unboundedLight.className}>WhatsApp</div>
                </div>
                <div className={s["link"]}>
                    <AiOutlineInstagram/>
                    <div className={unboundedLight.className}>Instagram</div>
                </div>
                <div className={s["link"]}>
                    <BsTelephoneFill/>
                    <div className={unboundedLight.className}>+79991234567</div>
                </div>
            </div>
        </div>
    )
}
export default LinkMe;