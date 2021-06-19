import React from 'react';

const pClass = `tracking-normal text-sm`;

const NationalDetailsForm = ({ closeFn, data }) => {
	console.log(data);
	return (
		<div className={`fixed top-0 left-0`}>
			<div // background
				className={`w-screen h-screen bg-black opacity-30`}
				onClick={closeFn}></div>
			<article
				className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-1/3 rounded-md overflow-hidden`}>
				<img className={`shadow-md`} src={data.flag} alt={`flag`} />
				<div className={`p-5 font-roboto`}>
					<h3 className={`font-roboto font-bold text-2xl`}>
						{data.name}
					</h3>
					<h4 className={`font-comfortaa font-bold text-xl mb-3`}>
						{data.nativeName}
					</h4>
					<p className={pClass}>{`Region: ${data.region}`}</p>
					<p className={pClass}>{`Coordinate: ${data.latlng
						.map(item => item)
						.join(', ')}`}</p>
					<p className={pClass}>{`Language: ${data.languages
						.map(item => item.name)
						.join(', ')}`}</p>
					<p className={pClass}>{`Calling Code: ${data.callingCodes
						.map(item => item)
						.join(', ')}`}</p>
					<p
						className={
							pClass
						}>{`Alternative Spelling: ${data.altSpellings
						.map(item => item)
						.join(', ')}`}</p>
					<p className={pClass}>{`Code: ${
						data.alpha2Code + ', ' + data.alpha3Code
					}`}</p>
					<p className={pClass}>{`Time Zones: ${data.timezones
						.map(item => item)
						.join(', ')}`}</p>
				</div>
			</article>
		</div>
	);
};

export default NationalDetailsForm;
