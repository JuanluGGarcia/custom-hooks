import { useState } from "react";

export const useCounter = () => {

    /* En mi customHook tengo mi estado, y las funciones que quiero usar en los componentes. Todas las funciones que quisiera las pondria aqui */
    const [counter, setCounter] = useState({ 
        value: 0, 
        clicks: 0 
    });

    const increment = () => {
        setCounter({ value: counter.value + 1, clicks: counter.clicks + 1 });
    };

    const decrement = () => {
        setCounter({ value: counter.value - 1, clicks: counter.clicks + 1 });
    };

    const reset = () => {
        setCounter({ value: 0, clicks: 0 });
    };

    return { counter, increment, decrement, reset };

};