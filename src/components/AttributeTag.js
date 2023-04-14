import React from 'react';
import styles from './AttributeTag.module.css';

const AttributeTag = ({ traitType, value }) => {
	return (
		<div className={styles.attributeTag}>
			<span className={styles.traitType}>{traitType}</span>
			<span className={styles.value}>{value}</span>
		</div>
	);
};

export default AttributeTag;
