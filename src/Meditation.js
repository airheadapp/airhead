import { useState, useEffect } from 'react';
import MedRender from './MedRender';

const Meditation = () => {
    const [userTime, setUserTime] = useState(0);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const counter = () => {
            timer > 0 &&
        setInterval(() => 
            (timer - 1), 1000);
        return () => {
            clearInterval(counter)
        }
        }
    }, [timer])

    const onChange = (event) => {
        setUserTime(event.target.value);
    }

    const startMeditation = (event) => {
        event.preventDefault();
        const copyOfUserTime = userTime;
        setTimer(copyOfUserTime * 60);
    }

    return(
        <div className="medApp">
            <h2>take a breath</h2>
            <p>A quote will appear to inspire your meditation. There will be a visual point of focus.</p>

            <form onSubmit={ onChange }>
                <label htmlFor="selectedTime">Choose your preferred time:</label>
                <select 
                    value={userTime}
                    onChange={onChange} 
                    name="selectedTime" 
                    id="selectedTime">

<<<<<<< HEAD
                    <option value="placeholder" disabled>choose time</option>
=======
                    <option value="0" disabled>choose time</option>
>>>>>>> f8270b3be6ff9a55526e49014db4a1be85471a09
                    <option value="3">3 minutes</option>
                    <option value="5">5 minutes</option>
                    <option value="10">10 minutes</option>
                </select>
                <button type="submit"
                    onClick={ startMeditation }
                >start meditation</button>
            </form>
                  {/* dynamically created content goes here
                  */}
                    {
                        timer !== 0
                        ? 
                        (
                            <>
                            <div>
                                {timer}
                            </div>

                            <MedRender /> 
                            </>
                        )
                        : (<p>please select something</p>)
                    }
                  {/* buttons */}
                  {/* will be replaced by meditation animation and timer */}

                  {/* button appears on top of animation, as animation fades in background - opacity */}
                </div>
    )}

export default Meditation;