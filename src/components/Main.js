import React, { useState } from 'react';

import ControlBlockTop from './ControlBlockTop';
import CountriesTable from './CountriesTable';
import ControlBLockBottom from './ControlBLockBottom';

const Main = () => {
	const [searchInputState, setSearchInputState] = useState('');
	// main data
	const useNationalDataState = useState(null);
	// current page & total pages
	const [pageState, setPageState] = useState([1, 10]);
	return (
		<main className={'my-20 max-w-screen-lg mx-auto'}>
			<ControlBlockTop
				useSearchState={[searchInputState, setSearchInputState]}
				useNationalDataState={useNationalDataState}
			/>
			<CountriesTable
				searchInputState={searchInputState}
				useNationalDataState={useNationalDataState}
				usePageState={[pageState, setPageState]}
			/>
			<ControlBLockBottom usePageState={[pageState, setPageState]} />
		</main>
	);
};

export default Main;
