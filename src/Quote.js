import firebase from './firebase';
import { useEffect, useState } from 'react';


const Quote = () => {

    const [quote, setQuote] = useState([]);
    const [quoteArray, setQuoteArray] = useState([]);

    useEffect( () => {
        const randomQuote = Math.floor(Math.random() * 12);
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {
            const data = response.val();
            // get data at random value and store in quote variable (quote variable is in state)

            for (let key in data) {
                quoteArray.push(data[key])
            }
        })
        const newQuoteArray = [...quoteArray]
        setQuote(newQuoteArray[randomQuote]);
    },[])

    return(
        <div> 
            <p className='quote'>{/*function to obtain the random quote*/}
            {quote}
            </p> 
        </div>
    )
}

export default Quote;