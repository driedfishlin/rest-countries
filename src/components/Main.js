import React, { useState } from 'react';

import ControlBlockTop from './ControlBlockTop';
import CountriesTable from './CountriesTable';
import ControlBLockBottom from './ControlBLockBottom';

const Main = () => {
	const [searchInputState, setSearchInputState] = useState('');
	// current page & total pages
	const [pageState, setPageState] = useState([1, 10]);
	return (
		<main className={`my-20 max-w-screen-lg mx-auto`}>
			<ControlBlockTop
				useSearchState={[searchInputState, setSearchInputState]}
			/>
			<CountriesTable
				searchInputState={searchInputState}
				usePageState={[pageState, setPageState]}
			/>
			<ControlBLockBottom usePageState={[pageState, setPageState]} />
		</main>
	);
};

export default Main;
