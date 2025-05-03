import React, { Component } from 'react';

// The list of possible results the magic 8-ball can return
const list = [
    'Yes', 
    'No', 
    'Maybe', 
    'Not Sure', 
    'Go Ahead', 
    'Ask a friend', 
    'Call the police',
    'Definitely!', 
    'Absolutely not', 
    'Ask again later', 
    'I wouldn’t count on it', 
    'Without a doubt', 
    'Signs point to yes', 
    'Better not tell you now', 
    'My sources say no', 
    'It is certain', 
    'Very doubtful', 
    'Don’t bet on it', 
    'You’re on your own', 
    'Flip a coin!',
    'Outlook not so good', 
    'Consult the stars', 
    'Try again tomorrow', 
    'Proceed with caution', 
    'Only if you’re lucky', 
    'Why are you asking me?', 
    'It’s a mystery', 
    'Not in a million years', 
    'Sure, if you dare', 
    'That’s a hard pass', 
    'Could go either way', 
    'The future is unclear', 
    'No way, José!', 
    'Trust your instincts', 
    'Maybe later', 
    'The odds are in your favor', 
    'Absolutely!', 
    'I’d think twice about that', 
    'Better start praying'
];

// Creating context
const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        screen: 0,
        question: '',
        result: ''
    };

    // Go to specific screen
    handleGoTo = (value) => {
        this.setState({ screen: value });
    };

    // Handle the question input by the user
    handleQuestion = (value) => {
        this.setState({ question: value });
    };

    // Generate a random result from the list
    getRandomValue = () => {
        return list[Math.floor(Math.random() * list.length)];
    };

    // Handle generating the result
    handleResult = () => {
        let rand = this.getRandomValue();

        // Prevent repeating the same result twice
        if (this.state.result !== '') {
            while (rand === this.state.result) {
                rand = this.getRandomValue();
            }
        }

        // Update the result in state
        this.setState({ result: rand });
    };

    // Reset all state values to their initial state
    handleReset = () => {
        this.setState({
            screen: 0,
            question: '',
            result: ''
        });
    };

    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state,
                    goTo: this.handleGoTo,
                    question: this.handleQuestion,
                    result: this.handleResult,
                    reset: this.handleReset
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export { MyProvider, MyContext };
