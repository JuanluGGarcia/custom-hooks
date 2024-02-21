import { useCounter } from '../../hooks/useCounter';

const CounterA = () => {

	const { counter, increment, decrement, reset } = useCounter();
	

	return (
		<>
			<h1>COUNTER: {counter.value}</h1>
			<h2>CLICKS: {counter.clicks}</h2>
			<button onClick={increment}>+1</button>
			<button onClick={decrement}>-1</button>
			<button onClick={reset}>Reset</button>
		
		</>
	);
};

export default CounterA;
