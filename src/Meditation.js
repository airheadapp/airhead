import { useState, useEffect } from 'react';
import MedRender from './MedRender';

const Meditation = () => {
    const [userTime, setUserTime] = useState('placeholder');
    const [timer, setTimer] = useState('placeholder');

    useEffect(() => {
        const counter =
            timer > 0 &&
        setInterval(() => 
            setTimer(timer - 1), 1000);
        return () => {
            clearInterval(counter);
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
            
    
                  {/* dynamically created content goes here
                  */}
                    {
                        //checking the initial condition
                        timer === 0
                        ? //is it true or false?
                        (//this will render if it is true
                            <form>
                                <button type="submit">Reset</button>
                            </form>
                        )
                        : //this is what happens if it is false - here is where we put a 2ND condition:
                        timer >= 1
                        ?//is the 2ND condition true or false?
                        (<MedRender />)
                        //this will render if the second condition is true
                        :
                        (
                <>
                    <h2>take a breath</h2>
                    <p>A quote will appear to inspire your meditation. There will be a visual point of focus.</p>

                    <form onSubmit={ onChange }>
                    <label htmlFor="selectedTime">Choose your preferred time:</label>
                    <select 
                    value={userTime}
                    onChange={onChange} 
                    name="selectedTime" 
                    id="selectedTime">

                    <option value="placeholder" disabled>choose time</option>
                    <option value="1">3 minutes</option>
                    <option value="5">5 minutes</option>
                    <option value="10">10 minutes</option>
                    </select>
                    <button type="submit"
                    onClick={ startMeditation }
                    >start meditation</button>
                    </form>

                    <p>Please select the time</p>
                </>
                )
                    }
                  {/* buttons */}
                  {/* will be replaced by meditation animation and timer */}

                  {/* button appears on top of animation, as animation fades in background - opacity */}
                </div>
    )}

export default Meditation;