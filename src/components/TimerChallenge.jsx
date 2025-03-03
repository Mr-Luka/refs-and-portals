import {useState, useRef} from 'react';

import ResultModal from './ResultModal.jsx'

export default function TimerChallenge({title, targetTime}){
    const timer = useRef()
    const dialog = useRef()
    const [timeRemaning, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaning > 0 && timeRemaning < targetTime * 1000;

    if(timeRemaning <= 0){
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }
    
    function handleStart(){
        timer.current = setInterval(()=> {
            setTimeRemaining((prevTimeRemaining)=> prevTimeRemaining - 10);
        }, 10);
    }

    function handleStop(){
        dialog.current.open()
        clearInterval(timer.current);
    }
    return (
      <>
      {/* ref={} its named ref, because in the ResultModal component we named it ref, but it has the same purpose */}
        <ResultModal ref={dialog} targetTime={targetTime} result='lost'/> 
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
      </>
    )
}