import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
	{
		title: 'Welcome',
		description: (
			<>
				This is a comprehensive wiki for all things DEVILISH. It is currently under development, so some areas may only be
				populated with placeholders.
			</>
		),
	},
	{
		title: 'Contributing',
		description: (
			<>
				Contributions are welcome and encouraged! As of now, the primary method for contributing is through github (link in
				footer). A brief guide will be published in the future.
			</>
		),
	},
];

function Feature({ title, description }) {
	return (
		// col--4
		<div className={clsx('col')}>
			<div className='text--center padding-horiz--md'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className='container'>
				<div className='row'>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
