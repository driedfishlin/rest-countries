import React, { useState } from 'react';
// import Fuse from 'fuse.js';

import ControlBlockTop from './ControlBlockTop';
import CountriesTable from './CountriesTable';
import ControlBLockBottom from './ControlBLockBottom';

const fuse = { fuse: null };

const Main = () => {
	const [searchInputState, setSearchInputState] = useState('');
	// main data (origin data from API)
	const useNationalDataState = useState(null);
	// the searched data
	const useSearchResultState = useState(null);
	// current page & total pages
	const usePageState = useState([1, 10]);
	return (
		<main className={'my-20 max-w-screen-lg mx-auto'}>
			<ControlBlockTop
				useSearchState={[searchInputState, setSearchInputState]}
				useNationalDataState={useNationalDataState}
				fuse={fuse}
				useSearchResultState={useSearchResultState}
				usePageState={usePageState}
			/>
			<CountriesTable
				searchInputState={searchInputState}
				useNationalDataState={useNationalDataState}
				usePageState={usePageState}
				fuse={fuse}
				useSearchResultState={useSearchResultState}
			/>
			<ControlBLockBottom usePageState={usePageState} />
		</main>
	);
};

export default Main;
