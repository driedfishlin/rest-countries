import React from 'react';

import ControlBlockTop from './ControlBlockTop';
import CountriesTable from './CountriesTable';
import ControlBLockBottom from './ControlBLockBottom';

const Main = () => {
	return (
		<main className={`my-20 max-w-screen-lg mx-auto`}>
			<ControlBlockTop />
			<CountriesTable />
			<ControlBLockBottom />
		</main>
	);
};

export default Main;
