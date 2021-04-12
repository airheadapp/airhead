import { useState, useEffect } from 'react';
import Quote from './Quote';
import Reset from './Reset';
import BallAnimation from './BallAnimation';



const Meditation = () => {

    const [change, setChange] = useState(0);
    const [meditation, setMeditation] = useState('');

    useEffect( () => {
        
        if (change === 0) {
            setMeditation('');
        } else if (change === 3) {
            setMeditation(
            <div>
                <Quote />
                <div className="animation"></div>
            </div>
            );
        }
    }, [])

    const timeChooser = (event) => {
        setChange(event.target.value);

        console.log(change);
    }


    return(

        <div className="medApp">

            <h2>take a breath</h2>
            <p>A quote will appear to inspire your meditation. There will be a visual point of focus.</p>

            <form action="submit">
                <label htmlFor="selectedTime">Choose your preferred time:</label>
                <select onChange={timeChooser} name="selectedTime" id="selectedTime">
                    <option value="3">3 minutes</option>
                    <option value="5">5 minuites</option>
                    <option value="10">10 minutes</option>
                </select>
            </form>
                  {/* dynamically created content goes here
                  */}

                  {/* buttons */}
                  {/* will be replaced by meditation animation and timer */}

                  {/* button appears on top of animation, as animation fades in background - opacity */}
                </div>

    )}

export default Meditation;