import React from 'react';
import { ReactComponent as SearchIcon } from '../image/search_icon.svg';

const ControlBlockTop = ({ useSearchState }) => {
	const [searchInputState, setSearchInputState] = useSearchState;
	const onInputChange = event => {
		console.log(event.target.value);
		setSearchInputState(event.target.value);
	};
	return (
		<div className={`flex justify-between items-center`}>
			<div
				className={`bg-white rounded-full pl-5 h-12 flex items-center justify-between w-1/3`}>
				<input
					className={`bg-transparent focus:outline-none`}
					placeholder={`Enter country name`}
					value={searchInputState}
					onChange={onInputChange}
				/>
				<SearchIcon className={`w-4 h-4 ml-5 mr-5 opacity-40`} />
				{/* <button
					className={`h-full bg-th-indigo rounded-full pl-5 pr-5 ml-3 text-white`}>
					Search
				</button> */}
			</div>
			<button className={`focus:outline-none`}>
				<p
					className={`inline-block text-th-indigo m-2 font-roboto font-bold`}>
					sort A-Z
				</p>
				<div
					className={`inline-block border-th-indigo border-2 rounded-full w-7 h-7 text-th-indigo p-1 leading-4 text-sm`}>
					↑
				</div>
			</button>
		</div>
	);
};

export default ControlBlockTop;
