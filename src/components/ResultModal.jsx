

// for older versions of React 19:

import {forwardRef, useImperativeHandle, useRef} from 'react';

const ResultModal = forwardRef(function ResultModal({remainingTime, targetTime, onReset}, ref) {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2)

    useImperativeHandle(ref, ()=> {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return (
        <dialog className='result-modal' ref={dialog}>
        {userLost && <h2>You lost!</h2>}
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
        <form method='dialog' onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
    )
})

export default ResultModal

// export default function ResultModal({result, targetTime, ref}){
//     return (
//     <dialog className='result-modal' ref={ref}>
//         <h2>You {result}</h2>
//         <p>The target time was <strong>{targetTime} seconds.</strong></p>
//         <p>You stopped the timer with <strong>X seconds left.</strong></p>
//         <form method='dialog'>
//             <button>Close</button>
//         </form>
//     </dialog>
//     );
// }