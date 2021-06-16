import React from 'react';

const buttonClass = `inline-block border-th-indigo border-2 rounded-full w-7 h-7 text-th-indigo p-1 leading-4 text-sm mx-10 focus:outline-none`;

const ControlBLockBottom = ({ usePageState }) => {
	const [pageState, setPageState] = usePageState;
	// change page
	const onButtonClick = target => {
		console.log(target, pageState[0], pageState[1]);
		if (target === '→' && pageState[0] < pageState[1])
			return setPageState(prevState => [prevState[0] + 1, pageState[1]]);
		if (target === '←' && pageState[0] > 1)
			setPageState(prevState => [prevState[0] - 1, pageState[1]]);
	};
	return (
		<div className={`flex justify-center`}>
			<div className={`flex`}>
				<button
					onClick={() => onButtonClick('←')}
					className={buttonClass}>
					←
				</button>
				<p className={`leading-7 text-th-indigo text-lg`}>
					{pageState[0]} / {pageState[1]}
				</p>
				<button
					onClick={() => onButtonClick('→')}
					className={buttonClass}>
					→
				</button>
			</div>
		</div>
	);
};

export default ControlBLockBottom;
