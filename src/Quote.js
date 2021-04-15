import firebase from './firebase';
import { useEffect, useState } from 'react';


const Quote = () => {

    const [quote, setQuote] = useState([]);
    const quoteArray = [];

    useEffect( () => {
        const randomQuote = Math.floor(Math.random() * 12);
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {

            const data = response.val();
            for (let key in data) {
                quoteArray.push(data[key])
            }
            const newQuoteArray = [...quoteArray]
            setQuote(newQuoteArray[randomQuote]);
        })
        
    },[])

    return(
        <div> 
            <p className='quote'>{/*here we will obtain the random quote*/}
            {quote}
            </p> 
        </div>
    )
}

export default Quote;