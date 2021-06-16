import React from 'react';

import Header from './components/Header';
import Main from './components/Main';

const App = () => {
	return (
		<div className={'px-10 py-10 bg-th-green h-full '}>
			<Header />
			<Main />
		</div>
	);
};

export default App;
