import {useState, useEffect} from 'react';

const Timer = () => {
   
    const [timer, setTimer] = useState(60);

    useEffect(() => {
        const counter = 
        timer > 0 &&
        setInterval(() => 
        setTimer(timer - 1), 1000);
        return () => {
            clearInterval(counter)
        }
    }, [timer])
    //const newTime = props.timeChooser(timer);
    return(
        <div>
            {timer}
        </div>
    ); 

}

export default Timer;