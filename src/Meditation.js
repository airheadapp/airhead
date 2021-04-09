import Quote from './Quote';
import Reset from './Reset';


const Meditation = () => {
    return(
        <div>
            <Quote />
            {/*initial CSS animation - timed to mimic breathing*/}
            <div className='animation'></div>
            {/*function counting down the meditation time*/}
            {/*function that triggers reset component when counter reaches zero*/}
            <Reset />
        </div>
    )
}

export default Meditation;