import React, { useEffect, useState } from 'react';

const th_class = `border-2 border-th-indigo bg-th-indigo text-white py-2 px-5 font-Comfortaa`;

const TdComponent = ({ item }) => {
	const td_class = `border-2 border-th-indigo text-th-indigo py-2 px-5 font-roboto font-light`;
	const {
		flag,
		name,
		alpha2Code,
		alpha3Code,
		nativeName,
		altSpellings,
		callingCodes,
	} = item;
	return (
		<tr>
			<td className={td_class}>
				<div className={`w-10 h-10 rounded-full overflow-hidden`}>
					<img
						className={`h-full object-cover`}
						src={flag}
						alt={`national flag`}
					/>
				</div>
			</td>
			<td className={td_class}>{name}</td>
			<td className={td_class}>{alpha2Code + ' / ' + alpha3Code}</td>
			<td className={td_class}>{nativeName}</td>
			<td className={td_class}>{altSpellings[0]}</td>
			<td className={td_class}>{callingCodes}</td>
		</tr>
	);
};

const CountriesCountriesTable = ({ searchInputState, usePageState }) => {
	const [nationalDataState, setNationalDataState] = useState(null);
	const [pageState, setPageState] = usePageState;
	useEffect(() => {
		try {
			fetch('https://restcountries.eu/rest/v2/all', {
				method: 'GET',
			})
				.then(response => {
					if (response.status !== 200)
						throw new Error('Unable to Obtain Information');
					return response.json();
				})
				.then(data => {
					const filteredData = data.map(item => ({
						flag: item.flag,
						name: item.name,
						alpha2Code: item.alpha2Code,
						alpha3Code: item.alpha3Code,
						nativeName: item.nativeName,
						altSpellings: item.altSpellings,
						callingCodes: item.callingCodes,
					}));
					console.log(filteredData[0]);
					setPageState([1, filteredData.length / 25]);
					setNationalDataState(filteredData);
				});
		} catch (error) {
			//TODO> error handel
			console.log(error);
		}
	}, []);

	return (
		<table className={`my-16 mx-auto border-2 border-th-indigo`}>
			<colgroup span="4"></colgroup>
			<thead>
				<tr>
					<th className={th_class}>FLAG</th>
					<th className={th_class}>NAME</th>
					<th className={th_class}>CODE</th>
					<th className={th_class}>NATIVE NAME</th>
					<th className={th_class}>ALT SPELLING</th>
					<th className={th_class}>CALLING CODE</th>
				</tr>
			</thead>
			<tbody>
				{nationalDataState !== null && searchInputState === ''
					? nationalDataState
							.map(item => (
								<TdComponent item={item} key={item.name} />
							))
							.slice(
								(pageState[0] - 1) * 25,
								(pageState[0] - 1) * 25 + 25
							)
					: null}
			</tbody>
		</table>
	);
};

export default CountriesCountriesTable;
