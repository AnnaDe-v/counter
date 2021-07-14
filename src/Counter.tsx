import {useState} from "react";
import classes from "./Counter.module.css";

const Counter = () => {
    const [count, setCounter] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)

    const IncCount = () => {
        setCounter(count < 6 ? count + 1 : count)
        if (count === 5) {
            setError(true)
        }
    }
    const ResCount = () => {
        setCounter(0)
        setError(false)
    }

    return (

        <div className={classes.wrapCounter}>
            <div className={error === true ? classes.error : classes.display}>{count}</div>
            <div className={classes.btnBlock}>
                <button className={classes.btnInc} onClick={IncCount} disabled={error === true}>INC</button>
                <button className={classes.btnRes} onClick={ResCount} disabled={count === 0 ? true : false}>RESET</button>
            </div>
        </div>
    )
}
export default Counter;