import { useState, useEffect } from 'react';
import Meditation from './Meditation';

const Buttons = () => {

    //const [timer, setTimer] = useState([3, 5, 10]);
    const [click, setClick] = useState(false);
    const [meditation, setMeditation] = useState('');

    useEffect( () => {
        if (click === true) {
            setMeditation(<Meditation />);
        } else {
            setMeditation('');
        }
    }, [click])



    // on click of the button: 
    // a new div will appear with the animation
    // firebase will be queried for a random quote
    // a timer will start that is set to the time on the button
    // reset button will appear

    return(
        <div className="introButtons">
            <h2>take a breath</h2>
            <p>A quote will appear to inspire your meditation. There will be a visual point of focus.</p>
            <p>Select your preferred time below:</p>

            <button onClick={ () => setClick(!click)} >3 mins</button>
            
            {/*{timer === 3 ? <div><Meditation /></div>: <div></div>}

            {/*<button onClick={(props) => { console.log(props);}} timer={5}>5 mins</button>


            <button onClick={(props) => { console.log(props);}} timer={10}>10 mins</button>*/}

        </div>
    )
}

export default Buttons;