// In this example, we're defining a Fade component that uses the Transition component to animate its opacity property. 
// The in prop tells the Transition component whether the element is currently mounted in the DOM or not. 
// The timeout prop specifies the duration of the animation.
// The defaultStyle object defines the CSS properties that should be applied to the element when it's not transitioning. 
// The transitionStyles object defines the CSS properties that should be applied to the element when it's transitioning 
// between different states. The keys in the transitionStyles object correspond to the different states of the Transition component 
// (entering, entered, exiting, and exited).
// Inside the Transition component, we use the state argument to determine which styles to apply to the element. 
// The state argument corresponds to the current state of the Transition component 
// (entering, entered, exiting, or exited). We combine the defaultStyle and transitionStyles[state] objects using the 
// spread operator to create the final style object.
// Finally, we render the Fade component with the in prop set to true or false to trigger the animation.

import React from 'react';
import { useState } from 'react';
import { Transition } from 'react-transition-group';
const duration = 400;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};
const Fade = ({ in: inProp }) => (
    <Transition in={inProp} timeout={duration}>
      {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          An example of a fade Transition!
        </div>
      )}
    </Transition>
  );
function App1() {
    const [visible, setVisible] = useState(false);
    const handleClick = () => {
      setVisible(prevVisible => !prevVisible);
    };
    return (
        <div>
          <button onClick={handleClick}>
            {visible ? 'Hide' : 'Show'}
          </button>
          <Fade in={visible} />
        </div>
      );
    }
export default App1 