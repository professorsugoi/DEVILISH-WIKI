require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const APIKEY = process.env.APIKEY;
const contractAddress = '0x231EDa2D0E36E5254515B7625D1201f7b4617cf4';

const fetchNFTs = async () => {
	const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${APIKEY}/getNFTsForCollection/`;
	const fetchURL = `${baseURL}?contractAddress=${contractAddress}&withMetadata=true`;
	try {
		const response = await axios.get(fetchURL);
		const nfts = response.data.nfts.map((nft) => {
			const devilId = parseInt(nft.id.tokenId);
			const openSeaUrl = `https://opensea.io/assets/ethereum/${contractAddress}/${devilId}`;
			return {
				...nft,
				devilId,
				openSeaUrl,
			};
		});
		return nfts;
	} catch (error) {
		console.error('Error fetching NFTs:', error);
		return [];
	}
};

// fetch all from collection
const createMarkdownFiles = (nfts) => {
	if (nfts.length > 0) {
		nfts.forEach((nft) => {
			const nftTitle = `${nft.metadata.name}`;
			const slug = nftTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-');
			// do not format frontmatter, as it will create syntax errors in generated files
			const frontmatter = `---
title: '${nftTitle}'
slug: ${slug}
tags:
  - Devil
keywords:
  - Devilish
last_update:
  author: sugoi
  date: 04/05/2023
---

`;
			const importStyles = `import AttributeTag from '@site/src/components/AttributeTag.js';\n\n`;
			const title = `# ${nftTitle}\n\n`;
			const imageUrl = nft.media[0].gateway;
			const imageName = nft.metadata.name;
			const image = `<img src="${imageUrl}" alt="${imageName}" width="500" />\n\n`;
			const openSeaLink = `[View on OpenSea](${nft.openSeaUrl})\n\n`;
			const descriptionHeading = '### DESCRIPTION\n\n';
			const description = nft.metadata.description;
			const attributesHeading = '### ATTRIBUTES\n\n';
			const attributes = nft.metadata.attributes
				.map((attribute) => `<AttributeTag traitType="${attribute.trait_type}" value="${attribute.value}" />\n`)
				.join('');
			const galleryHeading = '### GALLERY\n\n';
			const gallery = '*in development*\n\n';
			const markdown = `${frontmatter}${importStyles}${title}${image}${openSeaLink}${descriptionHeading}${description}\n\n${attributesHeading}${attributes}\n\n${galleryHeading}${gallery}`;
			fs.writeFileSync(`./docs/devils/${nft.metadata.name}.mdx`, markdown);
		});
		console.log('${nfts.length} Markdown files generated successfully!');
	} else {
		console.log('No data found to create a Markdown file.');
	}
};

// test fetch a single nft
// const createMarkdownFiles = (nfts) => {
// 	if (nfts.length > 0) {
// 		const nft = nfts[0]; // Select the first NFT from the fetched data

(async () => {
	const nfts = await fetchNFTs();
	createMarkdownFiles(nfts);
})();
