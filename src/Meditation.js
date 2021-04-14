import { useState, useEffect } from 'react';
import Quote from './Quote';
import Reset from './Reset';
import BallAnimation from './BallAnimation';
import MedRender from './MedRender';

const Meditation = () => {
    const [change, setChange] = useState('placeholder');
    // const [meditation, setMeditation] = useState('');

    // useEffect( () => {
    //     if (change !== 0) {
    //             console.log(meditation);
    //     } else {
    //         setMeditation('');
    //     }
    // }, [])

    const timeChooser = (event) => {
        setChange(event.target.value);
        event.preventDefault();
        console.log(change);
    }

    return(
        <div className="medApp">
            <h2>take a breath</h2>
            <p>A quote will appear to inspire your meditation. There will be a visual point of focus.</p>

            <form onSubmit={ timeChooser }>
                <label htmlFor="selectedTime">Choose your preferred time:</label>
                <select 
                    defaultValue="placeholder"
                    value={change}
                    onChange={timeChooser} 
                    name="selectedTime" 
                    id="selectedTime">

                    <option value="placeholder" disabled>choose time</option>
                    <option value="3">3 minutes</option>
                    <option value="5">5 minutes</option>
                    <option value="10">10 minutes</option>
                </select>
                <button type="submit">start meditation</button>
            </form>
                  {/* dynamically created content goes here
                  */}
                    {
                        change !== 0
                        ? (<MedRender /> )
                        : (<p>please select something</p>)
                    }
                  {/* buttons */}
                  {/* will be replaced by meditation animation and timer */}

                  {/* button appears on top of animation, as animation fades in background - opacity */}
                </div>
    )}

export default Meditation;