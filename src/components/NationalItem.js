import React from 'react';

const td_class = `border-2 border-th-indigo text-th-indigo py-2 px-5 font-roboto font-light`;

const NationalItem = ({ item, onClick }) => {
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

export default NationalItem;
