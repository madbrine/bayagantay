import s from "./styles.module.css";
function Pile() {
    return (
        <div className={s["container"]}>
            <div className={s["side-box"]}>
                <div className={s["triangle-left"]}/>
                <div className={s["side-left"]}/>
            </div>
            <div className={s["center"]}/>
            <div className={s["side-box"]}>
                <div className={s["triangle-right"]}/>
                <div className={s["side-right"]}/>
            </div>
        </div>
    )
}
export default Pile;