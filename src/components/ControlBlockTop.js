import React, { useState } from 'react';

import { ReactComponent as SearchIcon } from '../image/search_icon.svg';
import { itemsLimit } from '../config';

const ControlBlockTop = ({
	useSearchState,
	useNationalDataState,
	fuse,
	useSearchResultState,
	usePageState,
}) => {
	const [searchInputState, setSearchInputState] = useSearchState;
	const [nationalDataState, setNationalDataState] = useNationalDataState;
	const setSearchResultState = useSearchResultState[1];
	const setPageState = usePageState[1];
	const [arrowTextDirection, setArrowTextDirection] = useState('↓');
	const onInputChange = event => {
		const searchResult = fuse.fuse.search(event.target.value);
		if (event.target.value === '') {
			setPageState([1, Math.ceil(nationalDataState.length / itemsLimit)]);
		} else {
			setPageState([1, Math.ceil(searchResult.length / itemsLimit)]);
		}
		setSearchResultState(searchResult);
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
			</div>
			<button
				className={`focus:outline-none`}
				onClick={() => {
					setNationalDataState(prevState => {
						const copyState = JSON.parse(JSON.stringify(prevState));
						return copyState.reverse();
					});
					setArrowTextDirection(prevState =>
						prevState === '↑' ? '↓' : '↑'
					);
				}}>
				<p
					className={`inline-block text-th-indigo m-2 font-roboto font-bold`}>
					sort A-Z
				</p>
				<div
					className={`inline-block border-th-indigo border-2 rounded-full w-7 h-7 text-th-indigo p-1 leading-4 text-sm`}>
					{arrowTextDirection}
				</div>
			</button>
		</div>
	);
};

export default ControlBlockTop;
