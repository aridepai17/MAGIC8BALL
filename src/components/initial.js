import { useRef, useState, useContext } from 'react';
import { MyContext } from '../context';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure toast styles are included

const Initial = () => {
    const context = useContext(MyContext);
    const textInput = useRef();
    const [showNext, setShowNext] = useState(false);

    const handleChange = () => {
        setShowNext(textInput.current.value.length >= 5);
    };

    const handleSubmit = () => {
        const value = textInput.current.value;

        if (value.length >= 40) {
            toast.error('Your question is too long!', {
                position: toast.POSITION.TOP_LEFT
            });
            return false; // Early exit on error
        }

        context.question(value); // Store the question
        context.goTo(1); // Move to the next screen
        return true; // Indicate successful submission
    };

    return (
        <div>
            <h1>Ask a Question</h1>
            <label htmlFor="question">Your Question:</label>
            <input
                id="question"
                ref={textInput}
                onChange={handleChange}
                name="question"
                type="text"
                className="form-control"
            />
            {showNext && (
                <button
                    className="btn animate__animated animate__fadeIn"
                    onClick={handleSubmit}
                >
                    Next
                </button>
            )}
            <ToastContainer /> {/* Ensure ToastContainer is included */}
        </div>
    );
};

export default Initial;
