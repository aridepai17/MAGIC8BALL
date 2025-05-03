import { useContext } from 'react';
import { MyContext } from './context';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import 'animate.css';
import './assets/App.css';

import Initial from './components/initial';
import Result from './components/result';
import Confirm from './components/confirm';

const App = () => {
  const context = useContext(MyContext);

  if (!context) return null; // Avoid crash if context is undefined

  const screen = context.state.screen;

  // Memoize current screen's component
  let currentComponent;
  if (screen === 0) currentComponent = <Initial />;
  else if (screen === 1) currentComponent = <Confirm />;
  else if (screen === 2) currentComponent = <Result />;
  else currentComponent = <Initial />; // Fallback

  return (
    <div>
      <div className="container">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={screen}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <div>{currentComponent}</div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default App;
