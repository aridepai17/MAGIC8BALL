import React, { Component } from 'react';

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

const MyContext = React.createContext();
class MyProvider extends Component{

    state = {
        screen: 0,
        question: '',
        result: ''
    }

    handleGoTo = (value) => {
        this.setState({screen: value});
    }

    handleQuestion = (value) => {
        this.setState({question: value});
    }

    getRandomValue = () => {
        return list[Math.floor(Math.random() * list.length)];
    }

    handleResult = () => {
        let rand = this.getRandomValue();

        if(this.state.result !== ''){
            while(rand === this.state.result){
                rand = this.getRandomValue();
            }
        }
        this.setState({result: rand})
    }


    handleReset = () => {
        this.setState({
            screen: 0,
            question: '',
            result: ''
        })
    }

    render(){
        return(
            <>
                <MyContext.Provider value = {{
                    state: this.state,
                    goTo: this.handleGoTo,
                    question: this.handleQuestion,
                    result: this.handleResult,
                    reset: this.handleReset
                }}>
                    {this.props.children}

                </MyContext.Provider>
            </>
        );
    }
}

export { MyProvider, MyContext };
