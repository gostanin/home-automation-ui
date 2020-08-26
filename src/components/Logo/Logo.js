import React from 'react';

import styles from './Logo.module.css';
import logoImg from '../../assets/logo.png';

const logo = (props) => (
    <div className={styles.Logo}>
        <img src={logoImg} alt="LOGO" />
    </div>
);

export default logo;