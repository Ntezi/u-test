import {useState} from "react";

interface LoanFormProps {
	onSubmit: (amount: number, rate: number, months: number) => void;
}
function LoanForm({ onSubmit }: LoanFormProps) {
	const [amount, setAmount] = useState<number>(0);
	const [rate, setRate] = useState<number>(0);
	const [months, setMonths] = useState<number>(0);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(amount, rate, months);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Amount:
				<input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
			</label>
			<label>
				Interest Rate:
				<input type="number" value={rate} onChange={(e) => setRate(parseFloat(e.target.value))} />
			</label>
			<label>
				Months:
				<input type="number" value={months} onChange={(e) => setMonths(parseInt(e.target.value, 10))} />
			</label>
			<button type="submit">Submit</button>
		</form>
	);
}
