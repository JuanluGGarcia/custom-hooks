// import { useState } from 'react';
import { useCounter } from "../../hooks/useCounter";
const Counter = () => {

	/* Creamos la carpeta hooks dentro de src, y dentro de esta el archivo que hemos creado, un customHook p.e. useCounter (Siempre debe empezar con use... como cualquier hook) */

	// nos llevamos lo siguiente al archivo useCounter.js
	/* ******************* */
	/* const [counter, setCounter] = useState({ 
		value: 0, 
		clicks: 0 
	}); */
	/* ************************* */

	const { counter, increment, decrement } = useCounter();

	return (
		<>
			<h1>COUNTER: {counter.value}</h1>
			<h2>CLICKS: {counter.clicks}</h2>
			{/* <button onClick={() => increment(counter, setCounter)}>+1</button>
			<button onClick={() => decrement(counter, setCounter)}>-1</button> */}
			<button onClick={increment}>+1</button>
			<button onClick={decrement}>-1</button>
		</>
	);
};

// nos llevamos lo siguiente al archivo useCounter.js
	/* ******************* */
/* const increment = (counter, setCounter) => {
	setCounter({value: counter.value + 1, clicks: counter.clicks + 1});
};

const decrement = (counter, setCounter) => {
	setCounter({value: counter.value - 1, clicks: counter.clicks + 1});
}; */
/* ************************** */
export default Counter;
