import React, { useState, useEffect } from 'react';
import { NFTCard } from './NFTCard';

const useFetchNFTs = ({ APIKEY }) => {
	const [NFTs, setNFTs] = useState([]);

	useEffect(() => {
		const fetchNFTs = async () => {
			const requestOptions = {
				method: 'GET',
			};
			const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${APIKEY}/getNFTsForCollection/`;
			const fetchURL = `${baseURL}?contractAddress=0x231EDa2D0E36E5254515B7625D1201f7b4617cf4&withMetadata=true`;
			const nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
			if (nfts) {
				setNFTs(
					nfts.nfts.map((nft) => ({
						...nft,
						devilId: parseInt(nft.id.tokenId), // set nft based on token id
					}))
				);
			}
		};

		fetchNFTs();
	}, []);

	return NFTs;
};

const NFTList = ({ APIKEY, devilId }) => {
	const NFTs = useFetchNFTs({ APIKEY });

	const filteredNFTs = NFTs.filter((nft) => nft.devilId === devilId);

	return (
		<div>
			{filteredNFTs.map((nft, index) => {
				const description = nft.metadata.description;
				return <NFTCard key={index} nft={nft} description={description}></NFTCard>;
			})}
		</div>
	);
};

export default NFTList;

export async function getServerSideProps() {
	return { props: { APIKEY: process.env.APIKEY } };
}
