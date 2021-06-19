import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';

import NationalDetailsForm from './NationalDetailsForm';
import { fuzzySearchOptions, itemsLimit } from '../config';
import NationalItem from './NationalItem';

const th_class = `border-2 border-th-indigo bg-th-indigo text-white py-2 px-5 font-Comfortaa`;

const CountriesCountriesTable = ({
	searchInputState,
	useNationalDataState,
	usePageState,
	fuse,
	useSearchResultState,
	useErrorState,
}) => {
	const [nationalDataState, setNationalDataState] = useNationalDataState;
	const [pageState, setPageState] = usePageState;
	const searchResultState = useSearchResultState[0];
	const setErrorState = useErrorState[1];
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
					setPageState([1, filteredData.length / itemsLimit]);
					setNationalDataState(filteredData);
					fuse.fuse = new Fuse(filteredData, fuzzySearchOptions);
				});
		} catch (error) {
			setErrorState(`發生錯誤，無法取得資料！`);
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
					{(function () {
						if (nationalDataState === null) return null;
						// all nationals list
						if (searchInputState === '') {
							return nationalDataState
								.map(item => {
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
									(pageState[0] - 1) * itemsLimit,
									(pageState[0] - 1) * itemsLimit + itemsLimit
								);
						}
						// filtered nationals lst
						if (searchInputState !== '')
							return searchResultState
								.map(item => {
									return (
										<NationalItem
											item={item.item}
											key={item.item.name}
											onClick={() =>
												setDetailsState(item.item)
											}
										/>
									);
								})
								.slice(
									(pageState[0] - 1) * itemsLimit,
									(pageState[0] - 1) * itemsLimit + itemsLimit
								);
						return null;
					})()}
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
