import React, { useState, useEffect, useRef } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import './LoginStyle.css'

const Timer = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false, fun,[]);
  //let interval = useRef(1);
  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }
  function fun() {
    // console.log("Fun")
    
  }
  
  useEffect(() => {
    //const countRenderRef = useRef(1);
    let interval = null;
      console.log("Hi" +isActive)
       if (isActive ) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      } else if(props.show === 'on')
      {
        toggle()
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      }
      return () => clearInterval(interval);
    
  }, []);

  return (
    
      <div >
        <button className={`-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
          <button className="btn_margin" onClick={reset}>
          Reset
          </button>
          {props.show === 'off'
           ? {reset}  
            : [seconds]
            }
      </div>
      
  );
};

export default Timer;