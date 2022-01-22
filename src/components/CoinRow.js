import React from 'react';

const CoinRow = ({ coin, index }) => {
	return (
		<tr key={index}>
			<td>{index}</td>
			<td className="flex items-center">
				<img className="w-6 mr-6" src={coin.image} alt={coin.name} />
				<span>{coin.name}</span>
				<span className="text-zinc-500 uppercase ml-3">{coin.symbol}</span>
			</td>
			<td>{'$' + coin.current_price.toFixed(2)}</td>
			<td
				className={
					coin.price_change_percentage_24h > 0
						? 'text-green-500 pl-3'
						: 'text-red-600'
				}
			>
				{coin.price_change_percentage_24h.toFixed(2) + '%'}
			</td>
			<td>{coin.total_volume}</td>
		</tr>
	);
};

export default CoinRow;
