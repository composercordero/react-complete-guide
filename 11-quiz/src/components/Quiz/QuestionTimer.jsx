import { useEffect, useState } from "react";

const QuestionTimer = ({timeout, onTimeout}) => {

    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(()=>{
        console.log('Setting Timeout')
        const timer = setTimeout(onTimeout, timeout);
        return () => {clearTimeout(timer)}
    }, [onTimeout, timeout]) // added these dependencies because they are props.

    useEffect(() => {
        console.log('Setting Interval')
        const interval = setInterval(()=>{
            setRemainingTime(prev => prev - 100)
        }, 100);

        return () => {clearTimeout(interval);}
    }, []); // Add in dependencies props and state values but we are not using any here

    return <progress id="question-time" max={timeout} value={remainingTime} />
}

export default QuestionTimer;