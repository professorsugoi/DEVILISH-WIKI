import React from 'react';
import ReactMarkdown from 'react-markdown';
// import styles from '../styles/Card.module.scss';

const NFTCard = ({ nft, description }) => {
	return (
		<div>
			<div>
				{/* <h1>{nft.metadata.name}</h1> */}
				<img src={nft.media[0].gateway} alt={nft.metadata.name} style={{ width: '500px' }} />
			</div>
			<div>
				<div>
					{nft.metadata.attributes.map((attribute, index) => (
						<div key={index}>
							{attribute.trait_type}: {attribute.value}
						</div>
					))}
				</div>
				<span>
					<ReactMarkdown>{description}</ReactMarkdown>
				</span>
			</div>
		</div>
	);
};
export { NFTCard };
