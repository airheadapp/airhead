import { useState, useEffect } from 'react';

const Buttons = () => {

    // const [timer, setTimer] = useState([3, 5, 10]);

    // const handleClick = (props) => {
    //     console.log("Wow what a click");
    //     console.log(props.timer);
    // }

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

            <button onClick={ (props) => { console.log(props); }} timer={3}>3 mins</button>
            

            <button onClick={(props) => { console.log(props);}} timer={5}>5 mins</button>


            <button onClick={(props) => { console.log(props);}} timer={10}>10 mins</button>

        </div>
    )
}

export default Buttons;