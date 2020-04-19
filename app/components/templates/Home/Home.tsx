import React from 'react';
import styles from './Home.css';
import Header from '../../sections/Header';

export default function Home() {
  return (
    <div className={styles.container} data-tid="container">
      	<div className={styles.pageHeader}>
					<Header/>
				</div>
    </div>
  );
}
