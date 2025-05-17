import { useState, useContext } from 'react';
import { MyContext } from '../context';
import "../assets/App.css";

const Initial = () => {
  const context = useContext(MyContext);
  const [question, setQuestion] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setQuestion(e.target.value);
    if (error) setError(''); // Clear error on input change
  };

  const handleSubmit = () => {
    if (question.length >= 40) {
      setError('Question is too long! Please keep it under 40 characters.');
      return false;
    }
    context.question(question);
    context.goTo(1);
    return true;
  };

  return (
    <div>
      <h1>Ask a Question</h1>
      <label htmlFor="question">Your Question:</label>
      <input
        id="question"
        value={question}
        onChange={handleChange}
        name="question"
        type="text"
        className="form-control"
      />
      {question.length >= 5 && (
        <button
          className="btn animate__animated animate__fadeIn"
          onClick={handleSubmit}
        >
          Next
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Initial;
