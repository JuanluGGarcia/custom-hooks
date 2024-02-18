import { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState({ value: 0, clicks: 0 });

	return (
		<>
			<h1>COUNTER: {counter.value}</h1>
			<h2>CLICKS: {counter.clicks}</h2>
			<button onClick={() => increment(counter, setCounter)}>+1</button>
			<button onClick={() => decrement(counter, setCounter)}>-1</button>
		</>
	);
};

const increment = (counter, setCounter) => {};

const decrement = (counter, setCounter) => {};

export default Counter;
