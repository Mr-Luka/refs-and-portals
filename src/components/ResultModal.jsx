export default function ResultModal({result, targetTime, ref}){
    return (
    <dialog className='result-modal' ref={ref}>
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>X seconds left.</strong></p>
        <form method='dialog'>
            <button>Close</button>
        </form>
    </dialog>
    );
}




/* 
or for older versions of React 19:

import {useRef} from 'react';

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
    return (
        <dialog className='result-modal' ref={ref}>
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>X seconds left.</strong></p>
        <form method='dialog'>
            <button>Close</button>
        </form>
    </dialog>
    )
})

export default ResultModal

*/