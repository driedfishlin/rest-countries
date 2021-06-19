import React, { useEffect, useState } from 'react';
import NationalDetailsForm from './NationalDetailsForm';

const th_class = `border-2 border-th-indigo bg-th-indigo text-white py-2 px-5 font-Comfortaa`;

const NationalItem = ({ item, onClick }) => {
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
		<tr onClick={onClick} className={`cursor-pointer hover:bg-purple-100`}>
			<td className={td_class}>
				<div className={`w-10 h-10 rounded-full overflow-hidden`}>
					<img
						className={`h-full object-cover`}
						src={flag}
						alt={`national flag`}
					/>
				</div>
			</td>
			<td className={td_class + ` w-1/5`}>{name}</td>
			<td className={td_class + ` whitespace-nowrap`}>
				{alpha2Code + ' / ' + alpha3Code}
			</td>
			<td className={td_class}>{nativeName}</td>
			<td className={td_class}>{altSpellings[0]}</td>
			<td className={td_class}>{callingCodes}</td>
		</tr>
	);
};

const CountriesCountriesTable = ({
	searchInputState,
	useNationalDataState,
	usePageState,
}) => {
	const [nationalDataState, setNationalDataState] = useNationalDataState;
	const [pageState, setPageState] = usePageState;
	const [detailsFormState, setDetailsState] = useState(null);
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
					console.log(data[0]);
					const filteredData = data.map(item => ({
						flag: item.flag,
						name: item.name,
						alpha2Code: item.alpha2Code,
						alpha3Code: item.alpha3Code,
						nativeName: item.nativeName,
						altSpellings: item.altSpellings,
						callingCodes: item.callingCodes,
						// not necessary ↓
						timezones: item.timezones,
						region: item.region,
						latlng: item.latlng,
						languages: item.languages,
					}));
					// console.log(filteredData[0]);
					setPageState([1, filteredData.length / 25]);
					setNationalDataState(filteredData);
				});
		} catch (error) {
			//TODO> error handel
			console.log(error);
		}
	}, []);

	// switch <html> scroll depend on the details form
	useEffect(() => {
		detailsFormState
			? (document.documentElement.style.overflowY = 'hidden')
			: (document.documentElement.style.overflowY = 'auto');
	}, [detailsFormState]);

	return (
		<>
			<table className={`my-16 w-full border-2 border-th-indigo`}>
				<colgroup span="4"></colgroup>
				<thead>
					<tr className={`text-xs`}>
						<th className={th_class + ` whitespace-nowrap`}>
							FLAG
						</th>
						<th className={th_class + ` whitespace-nowrap`}>
							NAME
						</th>
						<th className={th_class + ` whitespace-nowrap`}>
							CODE
						</th>
						<th className={th_class + ` whitespace-nowrap`}>
							NATIVE NAME
						</th>
						<th className={th_class + ` whitespace-nowrap`}>
							ALT SPELLING
						</th>
						<th className={th_class}>CALLING CODE</th>
					</tr>
				</thead>
				<tbody>
					{nationalDataState !== null && searchInputState === ''
						? nationalDataState
								.map(item => {
									// console.log('re-render');
									return (
										<NationalItem
											item={item}
											key={item.name}
											onClick={() =>
												setDetailsState(item)
											}
										/>
									);
								})
								.slice(
									(pageState[0] - 1) * 25,
									(pageState[0] - 1) * 25 + 25
								)
						: null}
				</tbody>
			</table>
			{detailsFormState && (
				<NationalDetailsForm
					closeFn={() => setDetailsState(null)}
					data={detailsFormState}
				/>
			)}
		</>
	);
};

export default CountriesCountriesTable;
