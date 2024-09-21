import { useContext, useEffect } from 'react';
import { MyContext } from '../context';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Result = () => {
    const context = useContext(MyContext);

    useEffect(()=>{
        // eslint-disable-next-line
        context.result(); 
        toast.success('Your answer is ready!',{
            position: 'bottom-center'
        });
    },[]);

    return(
        <div>
            <h3> Here's your answer: </h3>
            <div className = 'viewer'>
                {context.state.result}
            </div>

            <div className = 'animate__animated animate__bounceIn animate__delay-1s'>
                <hr/>
                <button className = 'btn' onClick = {context.reset}>
                    Start Over
                </button>
                <button className = 'btn' onClick = {context.result}>
                    Decide Again
                </button>
            </div>
            <ToastContainer />
        </div>
    ); 
};

export default Result;