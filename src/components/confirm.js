import { useContext } from 'react';
import { MyContext } from '../context';
import "../assets/App.css";


const Confirm = () => {
    const context = useContext(MyContext);

    const goNext = () => {
        context.question(''); // Reset the question
        context.goTo(2);
    }

    const goBack = () => {
        context.goTo(0);
    }

    return(
        <div>
            <h3>Your question is: </h3>
            <div className = 'viewer'>
                {context.state.question}
            </div>

            
                <button className = 'btn' onClick = {goNext}>
                    Decide it
                </button>
                <button className = 'btn' onClick = {goBack}>
                    Ask Again
                </button>
            </div>
    )
    
}
export default Confirm;