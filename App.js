import React from "react";
import './App.css'

const App = () => {
  const [time, setTime] = React.useState(0);
  const [timeOn, setTimeOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timeOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timeOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timeOn]);

  return (
    <div className="Time">
      <h2>Stopwatch</h2>
      <div className="display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div className="buttons">
        {!timeOn && time === 0 && (
          <button onClick={() => setTimeOn(true)}>Start</button>
        )}
        {timeOn && <button onClick={() => setTimeOn(false)}>Stop</button>}
        {!timeOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timeOn && time > 0 && (
          <button onClick={() => setTimeOn(true)}>Resume</button>
        )}
      </div>
    </div>
  );
};

export default App;