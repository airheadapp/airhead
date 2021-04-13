import { useState, useEffect } from 'react';
import Quote from './Quote';
import Reset from './Reset';
import BallAnimation from './BallAnimation';
import MedRender from './MedRender';



const Meditation = () => {

    const [change, setChange] = useState(0);
    const [meditation, setMeditation] = useState('hi');

    useEffect( () => {
        
        if (change !== 0) {
            
            
            
                console.log(meditation);
        } else {
            setMeditation('');
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
                    <option value="5">5 minutes</option>
                    <option value="10">10 minutes</option>
                </select>
            </form>
                  {/* dynamically created content goes here
                  */}
                    {
                        change !== 0
                        ? <MedRender /> 
                        : <p>please select something</p>
                    }
                  {/* buttons */}
                  {/* will be replaced by meditation animation and timer */}

                  {/* button appears on top of animation, as animation fades in background - opacity */}
                </div>
    )}

export default Meditation;