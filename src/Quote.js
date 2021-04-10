import firebase from './firebase';
import { useEffect, useState } from 'react';


const Quote = () => {

    const [quote, setQuote] = useState([]);
    useEffect( () => {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {
            console.log(response.val());
        })
    },[])


    return(
        <div> 
                <p className='quote'>{/*function to obtain the random quote*/}</p> 
        </div>
    )
}

export default Quote;