import React from 'react';

const buttonClass = `inline-block border-th-indigo border-2 rounded-full w-7 h-7 text-th-indigo p-1 leading-4 text-sm mx-10`;

const ControlBLockBottom = () => {
	return (
		<div className={`flex justify-center`}>
			<div className={`flex`}>
				<button className={buttonClass}>←</button>
				<p className={`leading-7 text-th-indigo text-lg`}>1 / 3</p>
				<button className={buttonClass}>→</button>
			</div>
		</div>
	);
};

export default ControlBLockBottom;
