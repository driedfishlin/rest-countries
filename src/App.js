import React, { useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';

const App = () => {
	const [errorState, setErrorState] = useState(null);
	return (
		<div className={'px-10 py-10 bg-th-green h-full min-h-screen'}>
			<Header />
			{errorState ? (
				<div className={`py-20`}>
					<p className={`text-center text-th-indigo`}>{errorState}</p>
				</div>
			) : (
				<Main useErrorState={[errorState, setErrorState]} />
			)}
		</div>
	);
};

export default App;
