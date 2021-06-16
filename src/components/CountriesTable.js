import React, { useEffect, useState } from 'react';

const th_class = `border-2 border-th-indigo bg-th-indigo text-white py-2 px-5`;

const TdConponent = () => {
	const td_class = `border-2 border-th-indigo text-th-indigo py-2 px-5`;
	return (
		<tr>
			<td className={td_class}>O</td>
			<td className={td_class}>美國</td>
			<td className={td_class}>123</td>
			<td className={td_class}>hahaha</td>
			<td className={td_class}>?</td>
			<td className={td_class}>02</td>
		</tr>
	);
};

const CountriesCountriesTable = () => {
	const [originDataState, setOriginDataState] = useState(null);
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
					setOriginDataState(filteredData);
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
					<th className={th_class}>LANGUAGE</th>
					<th className={th_class}>ALT SPELLING</th>
					<th className={th_class}>CALLING CODE</th>
				</tr>
			</thead>
			<tbody>
				<TdConponent />
				<TdConponent />
				<TdConponent />
				<TdConponent />
				<TdConponent />
				<TdConponent />
			</tbody>
		</table>
	);
};

export default CountriesCountriesTable;
